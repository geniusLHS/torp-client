import React from 'react';

interface lProps {
  state: number;
}

let reasons: { [name: string]: string } = { 100: '해당 주소의 방이 존재하지 않습니다.', 101: '3명 이상의 접속자가 발생하여 주소가 만료되었습니다.', 102: '상대방의 연결이 종료되었습니다.' };

function Expired({ state }: lProps) {
  return (
    <div className="mt-28 flex justify-center font-sans md:mt-36">
      <div className="mx-5 flex w-full flex-col overflow-hidden break-keep rounded-lg border border-red-300 bg-red-50/50 text-center shadow-sm sm:w-[35rem] md:mx-0">
        <div className="flex min-h-[12rem] items-center justify-center justify-items-stretch bg-white p-10 text-xl">{reasons[state]}</div>
        <div className="flex flex-1 flex-col items-center justify-between space-y-6 bg-red-100 p-6 text-center">잘못된 접근입니다.</div>
      </div>
    </div>
  );
}

export default Expired;
