import React from 'react';
import { Header } from '@/components/Header';
import { EmailSignup } from '../components/EmailSignup'; // Corrected path
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { AELMSection } from '@/components/AELMSection';
import { FounderSection } from '@/components/FounderSection';
import { CareersSection } from '@/components/CareersSection';
import { Footer } from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-[rgba(26,26,26,1)] min-h-[2209px] w-full overflow-hidden max-md:max-w-full">
        <Header />
        
        <main className="pt-16">
          <EmailSignup className="mt-[3px]" />
          <Hero />
          
          <div className="flex w-full justify-center px-40 max-md:max-w-full max-md:px-5">
            <div className="min-w-60 w-full max-w-[960px] overflow-hidden flex-1 shrink basis-[0%] max-md:max-w-full">
              <AboutSection />
              <AELMSection />
              <FounderSection />
              <CareersSection />
            </div>
          </div>
        </main>
        
        <div className="flex w-full justify-center px-40 max-md:max-w-full max-md:px-5">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
