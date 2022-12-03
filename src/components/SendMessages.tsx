import { io, Socket } from 'socket.io-client';
import React, { useState } from 'react';
import encrypt from '../utils/encrypt';

interface lProps {
  socket: Socket;
  username: string;
  room: string;
  commonKey: CryptoKey;
}

async function send_message(socket: Socket, username: string, room: string, commonKey: CryptoKey, message: string) {
  let encrypted_message = await encrypt(message, commonKey);

  message = encrypted_message;

  socket.emit('send_message', { username, room, message });
}

const SendMessage = ({ socket, username, room, commonKey }: lProps) => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message !== '') {
      send_message(socket, username, room, commonKey, message);
      setMessage('');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="flex h-16 w-[40rem] items-center rounded-lg border border-gray-300">
      <input className="mx-2 h-12 flex-grow border-b border-gray-300 px-3 text-lg focus:outline-none" onKeyDown={handleKeyPress} onChange={(e) => setMessage(e.target.value)} value={message} />
      <button className="mr-2 h-12 shrink basis-24 rounded-lg bg-gray-200 text-lg hover:cursor-pointer hover:bg-gray-300 active:bg-gray-400" onClick={sendMessage}>
        전송
      </button>
    </div>
  );
};

export default SendMessage;
