import React from 'react';
import logo from './../images/logo.png';

function AboutContent() {
  return (
    <div className="flex w-full justify-center p-16">
      <div className="w-[45rem] text-lg">
        <p className="inline text-2xl">
          <img src={logo} alt="logo" className="-mt-1 inline h-7" /> 는 종단간 암호화를 지원하는 간단한 메시지 서비스 입니다.
        </p>
        <br />
        <br />
        <br />
        TORP는 :
        <br />
        <br />
        <ul className="flex flex-col gap-3">
          <li>
            <p className="text-xl">
              1. 종단간 암호화 <span className="inline rounded-full bg-gray-200 px-1 text-sm">E2EE</span> 기술이 사용됩니다.
            </p>
            대화 당사자를 제외한 어느 누구도 대화 내용을 알 수 없습니다.
          </li>
          <li className="line-through">
            <p className="text-xl">2. 복호화 키는 계속해서 초기화 됩니다. </p>
            문자가 일정 횟수 보내질 때 마다 복호화 키는 변경됩니다.
            <br />
            복호화 키가 한번 유출되더라도 최대 5개의 문자만 확인할 수 있습니다.
          </li>
          <li>
            <p className="text-xl">3. 오픈소스 입니다.</p>
            server와 client 구현에 사용된 코드들은 github에서 모두 읽어보실 수 있습니다.
          </li>
        </ul>
        <br />
        <div className="mt-16 w-full border-t border-t-[#898ea4] pt-10 text-center text-sm text-gray-500">© 2022 geniusLHS</div>
      </div>
    </div>
  );
}

export default AboutContent;
