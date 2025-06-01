
import React from 'react';

interface HeaderProps {
  onReserveAccess?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onReserveAccess }) => {
  return (
    <header className="flex w-full items-center justify-between px-10 py-3 border-[rgba(229,232,235,1)] border-b max-md:max-w-full max-md:px-5">
      <div className="flex items-center gap-4">
        <div className="w-4 h-4">
          <div className="flex min-h-4 w-4 flex-1" />
        </div>
        <div className="text-lg text-white font-bold whitespace-nowrap leading-none">
          Mundus
        </div>
      </div>
      
      <nav className="flex items-center gap-8 text-sm text-white">
        <div className="flex items-center gap-9 font-medium whitespace-nowrap">
          <a href="#product" className="hover:text-gray-300 transition-colors">
            Product
          </a>
          <a href="#company" className="hover:text-gray-300 transition-colors">
            Company
          </a>
          <a href="#careers" className="hover:text-gray-300 transition-colors">
            Careers
          </a>
        </div>
        <button
          onClick={onReserveAccess}
          className="bg-[rgba(54,54,54,1)] flex items-center justify-center font-bold text-center px-4 py-2 rounded-[20px] hover:bg-[rgba(64,64,64,1)] transition-colors whitespace-nowrap"
        >
          Reserve Early Access
        </button>
      </nav>
    </header>
  );
};
