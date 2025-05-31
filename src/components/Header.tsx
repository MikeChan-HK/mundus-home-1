
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full max-md:max-w-full">
      <nav className="flex w-full items-center justify-between px-10 py-3 border-[rgba(229,232,235,1)] border-b max-md:max-w-full max-md:px-5">
        <div className="flex items-center gap-4">
          <div className="w-4 h-4">
            <div className="flex min-h-4 w-4 flex-1" />
          </div>
          <div className="text-lg text-white font-bold whitespace-nowrap leading-none">
            Mundus
          </div>
        </div>
        
        <div className="flex items-center gap-8 text-sm text-white">
          <nav className="flex items-center gap-9 font-medium whitespace-nowrap">
            <a href="#product" className="hover:text-gray-300 transition-colors">
              Product
            </a>
            <a href="#company" className="hover:text-gray-300 transition-colors">
              Company
            </a>
            <a href="#careers" className="hover:text-gray-300 transition-colors">
              Careers
            </a>
          </nav>
          <button className="bg-[rgba(54,54,54,1)] flex items-center justify-center font-bold text-center px-4 py-2 rounded-[20px] hover:bg-[rgba(74,74,74,1)] transition-colors whitespace-nowrap">
            Reserve Early Access
          </button>
        </div>
      </nav>
    </header>
  );
};
