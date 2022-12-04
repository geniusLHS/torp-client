import React from 'react';
import logo from './../images/logo.png';

function AboutContent() {
  return (
    <div className="flex w-full justify-center p-6 sm:p-10 md:p-16">
      <div className="w-[45rem] text-lg">
        <p className="inline text-2xl">
          <img src={logo} alt="logo" className="-mt-1 inline h-[1.375rem]" /> 는 종단간 암호화를 지원하는 간단한 메시지 서비스 입니다.
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
          <li className="">
            <p className="text-xl">2. 간편하게 사용할 수 있습니다. </p>
            사용하기 위해 회원가입 또는 인증을 할 필요가 없습니다.
            <br />
            단지 URL을 전달하는 것만으로 암호화된 대화가 가능합니다!
          </li>
          <li>
            <p className="text-xl">3. 오픈소스입니다.</p>
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
