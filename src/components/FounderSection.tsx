import React from 'react';

export const FounderSection: React.FC = () => {
  return (
    <section className="min-w-60 w-full max-w-[960px] overflow-hidden flex-1 shrink basis-[0%] max-md:max-w-full">
      <header className="w-full text-[22px] text-white font-bold whitespace-nowrap leading-none pt-5 pb-3 px-4 max-md:max-w-full">
        Founder
      </header>
      <div className="flex w-full text-base text-[rgba(173,173,173,1)] font-normal p-4 max-md:max-w-full">
        <div className="flex min-w-60 w-full items-center justify-between flex-1 shrink basis-[0%] max-md:max-w-full">
          <div className="self-stretch flex min-w-60 gap-4 flex-wrap my-auto max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/8dc629ae2a5d45d08901e6df864c4154/9acb9596c21c3b2803e1520d8fe2e3e7064fb54b?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-32 min-h-32 shrink-0 rounded-[64px]"
              alt="Mike Chan, Founder & CEO"
            />
            <div className="flex min-w-60 min-h-32 flex-col w-[457px] justify-center">
              <h3 className="min-h-7 w-[389px] max-w-full text-[22px] text-white font-bold leading-none">
                Mike Chan
              </h3>
              <p className="w-[389px] max-w-full">
                Founder & CEO
              </p>
              <address className="self-stretch w-full max-md:max-w-full not-italic">
                Email: mikemike2007103@gmail.com | Twitter: MikeChan_HK
              </address>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[289px] w-full text-base text-white font-normal leading-6 pt-1 pb-[213px] px-4 max-md:max-w-full max-md:pb-[100px]">
        Mike Chan is the visionary founder and CEO of Mundus. With a
        background in artificial intelligence and machine learning, Mike
        is passionate about developing AI solutions that can make a
        positive impact on society. His leadership and expertise drive
        Mundus's commitment to innovation and excellence in the field of
        AI.
      </div>
    </section>
  );
};
