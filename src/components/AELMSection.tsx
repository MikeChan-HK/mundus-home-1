import React from 'react';

export const AELMSection: React.FC = () => {
  return (
    <section id="product" className="min-w-60 w-full max-w-[960px] overflow-hidden flex-1 shrink basis-[0%] max-md:max-w-full">
      <header className="min-h-[60px] w-full text-[22px] text-white font-bold leading-none pt-5 pb-3 px-4 max-md:max-w-full">
        AELM Framework
      </header>
      <div className="w-full text-base text-white font-normal leading-6 pt-1 pb-3 px-4 max-md:max-w-full">
        AELM (Automatic Execution Language Model) Layer is our flagship AI
        framework. It's engineered to optimize resource utilization
        while maintaining high accuracy and adaptability. AELM is
        suitable for various AI tasks, from natural language processing
        to computer vision. Its modular design allows for seamless
        integration with existing systems, and its advanced algorithms
        ensure superior performance in complex tasks. AELM is the
        foundation of our AI solutions, empowering businesses to unlock
        new possibilities and achieve unprecedented levels of
        efficiency.
      </div>
      <div className="flex min-h-10 w-full max-md:max-w-full" />
    </section>
  );
};
