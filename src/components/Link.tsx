import React from 'react';
import useCopyClipBoard from './useCopyClipBoard';

interface lProps {
  roomName: string;
}

function Link({ roomName }: lProps) {
  const [isCopy, onCopy] = useCopyClipBoard();

  const handleCopyClipBoard = (text: string) => {
    onCopy(text);
  };

  return (
    <div className="m-5 mt-28 flex justify-center font-sans md:m-0 md:mt-36">
      <div className="flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-gray-50/50 shadow-sm">
        <div className="flex flex-col justify-items-stretch bg-white p-7 md:p-10">
          <div
            className="break-all rounded-lg border border-gray-300 p-5 text-center text-lg text-gray-900 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 md:p-10 md:text-xl"
            onClick={() => handleCopyClipBoard(`${process.env.REACT_APP_HOSTNAME}/?room=` + roomName)}
          >
            {roomName ? <span>https://torp.geniuslhs.com/?room={roomName}</span> : <span>통신중..</span>}
          </div>
          <div className="mt-7 flex h-3 rounded-lg border border-gray-300">
            <div className="h-full w-full animate-progress overflow-hidden rounded-lg bg-blue-500"></div>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-between space-y-6 bg-gray-100 p-6 text-center text-sm md:text-base">
          위 URL을 대화 상대에게 전송하세요.
          {roomName ? isCopy ? <div className="m-0 text-blue-600">복사되었습니다!</div> : <div>클릭하여 복사할 수 있습니다.</div> : <br />}
        </div>
      </div>
    </div>
  );
}

export default Link;
