
import React from 'react';
import { EmailSignup } from './EmailSignup';

export const Hero: React.FC = () => {
  const handleEmailSubmit = (email: string) => {
    console.log('Email submitted:', email);
    // Here you would typically send the email to your backend
  };

  return (
    <section className="flex w-full justify-center mt-[60px] pt-5 px-40 max-md:max-w-full max-md:mt-8 max-md:px-5">
      <div className="min-w-60 w-full max-w-[1200px] overflow-hidden flex-1 shrink basis-[0%] max-md:max-w-full">
        <div className="min-h-[600px] w-full max-md:max-w-full">
          <div className="flex w-full flex-col items-stretch justify-center flex-1 p-4 max-md:max-w-full">
            <div className="flex flex-col relative min-h-[560px] w-full overflow-hidden pl-14 pr-6 pt-[232px] pb-[39px] rounded-xl max-md:max-w-full max-md:pt-[100px] max-md:px-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8dc629ae2a5d45d08901e6df864c4154/5c4ea0b0bda5f638449e0891fddb3cf09464cea2?placeholderIfAbsent=true"
                className="absolute h-full w-full object-cover inset-0"
                alt="AI technology background"
              />
              <div className="relative text-white max-md:max-w-full">
                <h1 className="min-h-[60px] w-full text-5xl font-bold tracking-[-2px] leading-none max-md:max-w-full max-md:text-[40px]">
                  AI Infrastructure For Everyone
                </h1>
                <p className="w-full text-base font-normal leading-6 mt-2 max-md:max-w-full">
                  Mundus is driven by the community.
                  <br />
                  Our framework, AELM, is designed to be more efficient,
                  scalable, and adaptable than existing solutions.
                </p>
              </div>
              <EmailSignup
                onSubmit={handleEmailSubmit}
                className="relative mt-[29px]"
              />
            </div>
          </div>
        </div>
        <div className="flex min-h-10 w-full max-md:max-w-full" />
      </div>
    </section>
  );
};