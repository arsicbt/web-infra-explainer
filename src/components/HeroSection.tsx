import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown, Server, Shield, Globe } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-violet/10 rounded-full blur-3xl animate-pulse-glow delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-orange/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-fade-in-up">
          <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground">{t('hero.badge')}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-gradient-primary">{t('hero.title')}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {t('hero.subtitle')}
        </p>

        {/* Icons */}
        <div className="flex items-center justify-center gap-8 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex flex-col items-center gap-2 group">
            <div className="p-4 rounded-xl glass group-hover:glow-cyan transition-all duration-300">
              <Server className="w-8 h-8 text-neon-cyan" />
            </div>
            <span className="text-xs text-muted-foreground">Servers</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <div className="p-4 rounded-xl glass group-hover:glow-violet transition-all duration-300">
              <Globe className="w-8 h-8 text-neon-violet" />
            </div>
            <span className="text-xs text-muted-foreground">Networks</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <div className="p-4 rounded-xl glass group-hover:glow-orange transition-all duration-300">
              <Shield className="w-8 h-8 text-neon-orange" />
            </div>
            <span className="text-xs text-muted-foreground">Security</span>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#intro"
          className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 glow-cyan animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          {t('hero.cta')}
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
