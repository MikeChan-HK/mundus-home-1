import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="flex min-h-64 w-full justify-center mt-[49px] max-md:max-w-full max-md:mt-10">
      <div className="min-w-60 min-h-[187px] w-[347px] max-w-[960px]">
        <div className="flex w-full flex-col items-stretch flex-1 px-5 py-10">
          <div className="flex min-h-6 w-full" />
          <div className="flex w-full gap-4 justify-center flex-wrap mt-6">
            <div className="flex flex-col items-center w-6">
              <div className="flex w-6 flex-col items-center flex-1">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/8dc629ae2a5d45d08901e6df864c4154/b97391314be83a9035c40862d7ce4e5ad6d2ec66?placeholderIfAbsent=true"
                  alt="Social media"
                  className="aspect-[1] object-contain w-full flex-1"
                />
              </div>
            </div>
            <div className="flex flex-col items-center w-6">
              <div className="flex w-6 flex-col items-center flex-1">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/8dc629ae2a5d45d08901e6df864c4154/bed3484866be2d94ff09ab462bbb15e2cb223c83?placeholderIfAbsent=true"
                  alt="Social media"
                  className="aspect-[1] object-contain w-full flex-1"
                />
              </div>
            </div>
          </div>
          <p className="text-[rgba(173,173,173,1)] text-base font-normal text-center mt-6">
            © 2025 Mundus AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
