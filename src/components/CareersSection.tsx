import React from 'react';
import { Link } from 'react-router-dom';

export const CareersSection: React.FC = () => {
  return (
    <Link to="/careers" className="contents">
      <section id="careers" className="min-w-60 w-full max-w-[960px] overflow-hidden flex-1 shrink basis-[0%] max-md:max-w-full">
        <div className="flex w-full flex-col items-stretch text-white justify-center p-4 max-md:max-w-full">
          <div className="flex flex-col relative min-h-[246px] w-full overflow-hidden pt-[157px] pb-[31px] px-6 rounded-xl max-md:max-w-full max-md:pt-[100px] max-md:px-5">
            <img
            src="https://cdn.builder.io/api/v1/image/assets/8dc629ae2a5d45d08901e6df864c4154/c5efaa9bafa0d77c9c6a2c70910e96bacd7c34ff?placeholderIfAbsent=true"
            className="absolute h-full w-full object-cover inset-0"
            alt="Careers at Mundus"
          />
          <div className="relative w-[440px] max-w-full">
            <h2 className="w-full max-w-[440px] text-2xl font-bold whitespace-nowrap leading-none max-md:max-w-full">
              Careers
            </h2>
            <p className="w-full text-base font-medium mt-1 max-md:max-w-full">
              Explore opportunities to join our team and shape the
              future of AI.
            </p>
          </div>
        </div>
      </div>
      <div className="flex min-h-10 w-full max-md:max-w-full" />
    </section>
    </Link>
  );
};
