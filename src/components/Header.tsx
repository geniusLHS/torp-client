import React from 'react';
import logo from './../images/logo.png';

function Header() {
  return (
    <div className="sticky top-0 z-30 border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto max-w-5xl px-5">
        <nav className="bg-white">
          <div className="flex items-center justify-start gap-10">
            <a href="." className="inline-flex items-center text-black">
              <img src={logo} alt="logo" className="h-6" />
            </a>
            <ul className="flex items-center space-x-1 text-sm sm:text-base">
              <li className="">
                <a href="/about" className="block border-b-2 border-transparent py-4 px-2 text-center text-lg transition hover:border-blue-600 sm:px-3">
                  about
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
