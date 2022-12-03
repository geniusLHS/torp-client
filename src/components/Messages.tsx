import React from 'react';
import { io, Socket } from 'socket.io-client';
import { useState, useEffect, useRef } from 'react';
import decrypt from '../utils/decrypt';

interface lProps {
  socket: Socket;
  username: string;
  room: string;
  commonKey: CryptoKey;
}

interface MessageItem {
  message: string;
  username: string;
}

// async function decrypt_message(message: string, commonKey: CryptoKey) {
//   return await decrypt(message, commonKey);
// }

const Messages = ({ socket, username, room, commonKey }: lProps) => {
  const [messagesRecieved, setMessagesReceived] = useState<MessageItem[]>([]);

  const messagesColumnRef = useRef<any>(null);

  // Runs whenever a socket event is recieved from the server
  useEffect(() => {
    socket.on('receive_message', (data) => {
      decrypt(data.message, commonKey).then((raw_message) => {
        setMessagesReceived((oldMessages) => [
          ...oldMessages,
          {
            message: raw_message,
            username: data.username,
          },
        ]);
      });
    });

    // Remove event listener on component unmount
    // return () => socket.off('receive_message');
  }, [socket]);

  useEffect(() => {
    messagesColumnRef.current.scrollTop = messagesColumnRef.current.scrollHeight;
  }, [messagesRecieved]);

  return (
    <div className="flex flex-col">
      <div className="mb-2 flex h-96 w-[40rem] flex-col items-start overflow-x-hidden overflow-y-scroll rounded-lg border border-gray-300 pb-2" ref={messagesColumnRef}>
        {messagesRecieved.map((msg, i) => (
          <div className={'max-h-xl mx-2 mt-2 min-w-[15rem] max-w-xl rounded-lg border border-gray-300 p-2 ' + (msg.username == username ? 'self-end' : 'self-start')} key={i}>
            <div className="text-sm text-blue-600">
              <span className="">{msg.username == username ? '나' : '상대'}</span>
            </div>
            <p className="text-lg ">{msg.message}</p>
          </div>
        ))}
      </div>
      <span className="mb-5 self-center">문자 개수 : {messagesRecieved.length}</span>
    </div>
  );
};

export default Messages;
