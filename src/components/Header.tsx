import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full max-md:max-w-full">
      <nav className="flex w-full items-center justify-between flex-wrap px-10 py-3 border-[rgba(229,232,235,1)] border-b max-md:max-w-full max-md:px-5">
        <div className="self-stretch flex items-center gap-4 my-auto">
          <div className="self-stretch w-4 my-auto">
            <div className="flex min-h-4 w-4 flex-1" />
          </div>
          <div className="self-stretch text-lg text-white font-bold whitespace-nowrap leading-none w-[71px] my-auto">
            Mundus
          </div>
        </div>
        <div className="self-stretch flex min-w-60 gap-8 text-sm text-white flex-wrap flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          <nav className="flex min-w-60 min-h-10 items-center gap-9 font-medium whitespace-nowrap">
            <a href="#product" className="self-stretch w-[55px] my-auto hover:text-gray-300 transition-colors">
              Product
            </a>
            <a href="#company" className="self-stretch w-16 my-auto hover:text-gray-300 transition-colors">
              Company
            </a>
            <a href="#careers" className="self-stretch w-[52px] my-auto hover:text-gray-300 transition-colors">
              Careers
            </a>
          </nav>
          <button className="bg-[rgba(54,54,54,1)] flex min-w-[84px] min-h-10 max-w-[480px] items-center overflow-hidden font-bold text-center justify-center w-[175px] px-4 rounded-[20px] hover:bg-[rgba(74,74,74,1)] transition-colors">
            <span className="self-stretch w-[143px] overflow-hidden my-auto">
              Reserve Early Access
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};
