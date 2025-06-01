import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="company" className="min-w-60 w-full max-w-[960px] overflow-hidden flex-1 shrink basis-[0%] max-md:max-w-full">
      <header className="min-h-[60px] w-full text-[22px] text-white font-bold leading-none pt-5 pb-3 px-4 max-md:max-w-full">
        About Mundus
      </header>
      <div className="w-full text-base text-white font-normal leading-6 pt-1 pb-3 px-4 max-md:max-w-full">
        Mundus is focused on developing advanced AI frameworks. Our core
        product, AELM, represents a significant leap forward in AI
        technology, offering enhanced performance and flexibility for a
        wide range of applications. We are committed to pushing the
        boundaries of AI research and development to create solutions
        that address real-world challenges and drive innovation across
        industries.
      </div>
      <div className="flex min-h-10 w-full max-md:max-w-full" />
    </section>
  );
};
