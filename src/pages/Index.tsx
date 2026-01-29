import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/sections/IntroSection';
import SimpleInfraSection from '@/components/sections/SimpleInfraSection';
import DistributedInfraSection from '@/components/sections/DistributedInfraSection';
import SecuredInfraSection from '@/components/sections/SecuredInfraSection';
import GoogleRequestSection from '@/components/sections/GoogleRequestSection';
import ConclusionSection from '@/components/sections/ConclusionSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <IntroSection />
          <SimpleInfraSection />
          <DistributedInfraSection />
          <SecuredInfraSection />
          <GoogleRequestSection />
          <ConclusionSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
