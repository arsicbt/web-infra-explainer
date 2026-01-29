import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionWrapper from '../SectionWrapper';
import SectionHeader from '../SectionHeader';
import InfoCard from '../InfoCard';
import GoogleRequestDiagram from '../diagrams/GoogleRequestDiagram';
import { Search, Globe, Network, Shield, Lock, Shuffle, Server, Cpu, Database, Monitor } from 'lucide-react';

const GoogleRequestSection: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: Search, title: t('google.dns.title'), description: t('google.dns.desc'), color: 'cyan' as const },
    { icon: Network, title: t('google.tcp.title'), description: t('google.tcp.desc'), color: 'violet' as const },
    { icon: Shield, title: t('google.firewall.title'), description: t('google.firewall.desc'), color: 'orange' as const },
    { icon: Lock, title: t('google.https.title'), description: t('google.https.desc'), color: 'cyan' as const },
    { icon: Shuffle, title: t('google.lb.title'), description: t('google.lb.desc'), color: 'violet' as const },
    { icon: Server, title: t('google.webserver.title'), description: t('google.webserver.desc'), color: 'cyan' as const },
    { icon: Cpu, title: t('google.appserver.title'), description: t('google.appserver.desc'), color: 'violet' as const },
    { icon: Database, title: t('google.database.title'), description: t('google.database.desc'), color: 'orange' as const },
    { icon: Monitor, title: t('google.render.title'), description: t('google.render.desc'), color: 'cyan' as const },
  ];

  return (
    <SectionWrapper id="google-request">
      <SectionHeader title={t('google.title')} subtitle={t('google.subtitle')} accentColor="cyan" />

      {/* Introduction */}
      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-lg text-muted-foreground text-center leading-relaxed mb-6">
          {t('google.intro')}
        </p>
        <div className="glass rounded-lg p-4 border border-neon-cyan/20">
          <p className="text-sm text-neon-cyan font-medium">
            💡 {t('google.interview.tip')}
          </p>
        </div>
      </div>

      {/* Request Flow Diagram */}
      <div className="mb-16">
        <GoogleRequestDiagram />
      </div>

      {/* Detailed Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-foreground border border-border z-10">
              {index + 1}
            </div>
            <InfoCard
              icon={step.icon}
              title={step.title}
              description={step.description}
              accentColor={step.color}
            />
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="max-w-3xl mx-auto mt-16">
        <div className="glass rounded-2xl p-8 border border-neon-violet/20">
          <h3 className="text-xl font-semibold mb-4 text-center">{t('google.summary.title')}</h3>
          <p className="text-muted-foreground text-center leading-relaxed">
            {t('google.summary.desc')}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default GoogleRequestSection;
