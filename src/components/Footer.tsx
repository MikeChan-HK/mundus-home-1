import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="h-[136px] w-full max-md:max-w-full">
      <div className="min-h-[248px] w-full px-5 py-12 max-md:max-w-full">
        <div className="flex w-full gap-4 justify-center flex-wrap max-md:max-w-full">
          <div className="flex flex-col items-center w-6">
            <div className="flex w-6 flex-col items-center flex-1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8dc629ae2a5d45d08901e6df864c4154/07988e26b85ee5a76e16619b56b15780c9a72a0a?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-full flex-1"
                alt="Social media link"
              />
            </div>
          </div>
          <div className="flex flex-col items-center w-6">
            <div className="flex w-6 flex-col items-center flex-1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8dc629ae2a5d45d08901e6df864c4154/2a033813d461eb39a1bb85d85f51a724a7c432f8?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-full flex-1"
                alt="Social media link"
              />
            </div>
          </div>
        </div>
        <div className="w-full text-base text-[rgba(173,173,173,1)] font-normal text-center mt-6 max-md:max-w-full">
          © 2025 Mundus AI. All rights reserved.
        </div>
      </div>
      <div className="flex min-h-[254px] w-full max-md:max-w-full" />
    </footer>
  );
};
