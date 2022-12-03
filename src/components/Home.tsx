import React from 'react';
import Header from './Header';
import Link from './Link';
import { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import generateKeyPair from '../utils/generateKeyPair';
import deriveKey from '../utils/deriveKey';
import Chat from './Chat';
import Expired from './Expired';

const newSocket = io('http://localhost:4000', {
  transports: ['websocket'],
  upgrade: false,
  forceNew: true,
});

// let messageCount = 0;

function Home() {
  const [keyExchangeState, setKeyExchangeState] = useState(0);
  /* keyExchangeState =
  0 : 아무것도 되지 않음
  1 : socket.io를 통해 두 명이 연결됨
  2 : 키 생성 및 키 전송
  3 : socket.io로 부터 키를 받고, 공통키 생성
  */
  const [publicKey, setPublicKey] = useState<JsonWebKey | null>(null);
  const [privateKey, setPrivateKey] = useState<JsonWebKey | null>(null);
  const [opponentPublicKey, setOpponentPublicKey] = useState<JsonWebKey | null>(null);
  const [commonKey, setCommonKey] = useState<CryptoKey | null>(null);

  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');

  // const [messageCount, setMessageCount] = useState(0);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const roomNameInURL = urlParams.get('room');

    if (!roomNameInURL) {
      setUsername('Alice');
      newSocket.emit('new_room');
    } else if (roomNameInURL) {
      setRoom(roomNameInURL);
      setUsername('Bob'); // 방을 만든 사람은 Alice, 들어온 사람은 Bob
      newSocket.emit('join_room', { username: 'Bob', room: roomNameInURL });
    }

    setKeyExchangeState(1);
  }, []);

  useEffect(() => {
    if (keyExchangeState == 1) {
      generateKeyPair().then((data) => {
        setPrivateKey(data.privateKeyJwk);
        setPublicKey(data.publicKeyJwk);

        setKeyExchangeState(2);
      });
    } else if (keyExchangeState == 2 && publicKey && room != '') {
      newSocket.emit('send_publicKey', { username: username, room: room, publicKey: publicKey });

      setKeyExchangeState(3);
    } else if (keyExchangeState >= 3 && keyExchangeState < 100 && opponentPublicKey && privateKey) {
      deriveKey(opponentPublicKey, privateKey).then((data) => {
        setCommonKey(data);
      });
    }
  }, [keyExchangeState, publicKey, room, opponentPublicKey]);

  useEffect(() => {
    newSocket.on('receive_publicKey', (data) => {
      if (data.room == room && data.username != username) {
        // 내가 보낸 키가 아니면 상대방의 키로 설정
        setOpponentPublicKey(data.publicKey);

        if (keyExchangeState == 3) setKeyExchangeState(4); // 만약 keyExchangeState가 먼저 되었다면, 3으로 늘려서 다시 하도록 한다.
      }
    });
    newSocket.on('receive_roomName', (data) => {
      let roomName = data;
      setRoom(roomName);
    });
    // newSocket.on('receive_message', (data) => {
    //   setMessageCount(messageCount + 1);
    //   console.log(messageCount);
    // if (messageCount % 5 == 0) {
    // setKeyExchangeState(1);
    // }
    // });

    // 방이 없는 경우
    newSocket.on('room_not_exist', (data) => {
      setKeyExchangeState(100); // 해당 주소가 존재하지 않을 경우 100으로 설정
    });
    newSocket.on('room_expired_third_person', (data) => {
      setKeyExchangeState(101); // 세번째 사람이 들어와서 방이 없어질경우 101으로 설정
    });
    newSocket.on('room_expired_opponent_disconnected', (data) => {
      setKeyExchangeState(102); // 상대방 나감
    });
  }, [newSocket, room]);

  return (
    <div>
      <Header></Header>
      {keyExchangeState >= 100 ? (
        <Expired state={keyExchangeState}></Expired>
      ) : commonKey ? (
        <Chat socket={newSocket} username={username} room={room} commonKey={commonKey}></Chat>
      ) : (
        <Link roomName={room}></Link>
      )}
    </div>
  );
}

export default Home;
