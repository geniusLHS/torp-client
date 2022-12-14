import React from 'react';
import logo from './../images/logo.png';
import { BiLinkExternal } from 'react-icons/bi';

function AboutContent() {
  return (
    <div className="flex w-full justify-center p-6 sm:p-10 md:p-16">
      <div className="w-[45rem] text-lg">
        <p className="inline text-2xl">
          <img src={logo} alt="logo" className="-mt-1 inline h-[1.375rem]" /> 는 종단간 암호화를 지원하는 오픈소스 메시지 서비스 입니다.
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
            <a href="https://github.com/geniusLHS/torp-server" target="_blank" className="mr-1 inline rounded-full bg-blue-50 p-0.5 px-1 hover:bg-blue-100">
              server
              <BiLinkExternal className="ml-1 inline"></BiLinkExternal>
            </a>
            와
            <a href="https://github.com/geniusLHS/torp-client" target="_blank" className="mx-1 inline rounded-full bg-blue-50 p-0.5 px-1 hover:bg-blue-100">
              client
              <BiLinkExternal className="ml-1 inline"></BiLinkExternal>
            </a>
            구현에 사용된 코드들은 github에서 모두 읽어보실 수 있습니다.
            <br />
            피드백은 왼쪽 아래의 '의견 보내기' 버튼을 활용해주세요.
          </li>
        </ul>
        <br />
        <div className="mt-10 w-full border-t border-t-[#898ea4] pt-10 text-center text-sm text-gray-500">© 2022 geniusLHS</div>
      </div>
    </div>
  );
}

export default AboutContent;
