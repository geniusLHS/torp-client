import React from 'react';
import { io, Socket } from 'socket.io-client';
import Messages from './Messages';
import SendMessage from './SendMessages';

interface lProps {
  socket: Socket;
  username: string;
  room: string;
  commonKey: CryptoKey;
}

const Chat = ({ socket, username, room, commonKey }: lProps) => {
  return (
    <div className="mt-16 flex justify-center font-sans">
      <div>
        <Messages socket={socket} username={username} room={room} commonKey={commonKey} />
        <SendMessage socket={socket} username={username} room={room} commonKey={commonKey} />
      </div>
    </div>
  );
};

export default Chat;
