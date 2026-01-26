import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionWrapper from '../SectionWrapper';
import SectionHeader from '../SectionHeader';
import InfoCard from '../InfoCard';
import IssueCard from '../IssueCard';
import DistributedInfraDiagram from '../diagrams/DistributedInfraDiagram';
import { Shuffle, Settings, ToggleRight, Database, AlertCircle, Shield, Activity } from 'lucide-react';

const DistributedInfraSection: React.FC = () => {
  const { t } = useLanguage();

  const components = [
    { icon: Shuffle, title: t('distributed.lb.title'), description: t('distributed.lb.desc'), color: 'cyan' as const },
    { icon: Settings, title: t('distributed.algorithm.title'), description: t('distributed.algorithm.desc'), color: 'violet' as const },
  ];

  const dbComponents = [
    { icon: Database, title: t('distributed.primary.title'), description: t('distributed.primary.desc'), color: 'orange' as const },
    { icon: Database, title: t('distributed.replica.title'), description: t('distributed.replica.desc'), color: 'orange' as const },
  ];

  const issues = [
    { title: 'SPOF', description: t('distributed.spof.desc') },
    { title: t('distributed.security.title'), description: t('distributed.security.desc') },
    { title: t('distributed.monitoring.title'), description: t('distributed.monitoring.desc') },
  ];

  return (
    <SectionWrapper id="distributed">
      <SectionHeader title={t('distributed.title')} subtitle={t('distributed.subtitle')} accentColor="violet" />

      {/* Introduction */}
      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-lg text-muted-foreground text-center leading-relaxed">
          {t('distributed.intro')}
        </p>
      </div>

      {/* Diagram */}
      <div className="mb-16 glass rounded-2xl p-4 border border-border">
        <DistributedInfraDiagram />
      </div>

      {/* Load Balancer Components */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {components.map((component, index) => (
          <InfoCard
            key={index}
            icon={component.icon}
            title={component.title}
            description={component.description}
            accentColor={component.color}
          />
        ))}
      </div>

      {/* Active-Active vs Active-Passive */}
      <div className="glass rounded-2xl p-8 border border-neon-violet/20 mb-12 max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <ToggleRight className="w-6 h-6 text-neon-violet" />
          <h3 className="text-xl font-semibold">{t('distributed.active.title')}</h3>
        </div>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {t('distributed.active.desc')}
        </p>
        <div className="glass rounded-lg p-4 border border-neon-cyan/20">
          <p className="text-sm text-neon-cyan font-medium">
            ℹ️ {t('distributed.active.current')}
          </p>
        </div>
      </div>

      {/* Database Primary-Replica */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Database className="w-6 h-6 text-neon-orange" />
          <h3 className="text-xl font-semibold">{t('distributed.db.title')}</h3>
        </div>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {t('distributed.db.desc')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dbComponents.map((component, index) => (
            <InfoCard
              key={index}
              icon={component.icon}
              title={component.title}
              description={component.description}
              accentColor={component.color}
            />
          ))}
        </div>
      </div>

      {/* Issues */}
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <AlertCircle className="w-6 h-6 text-destructive" />
          <h3 className="text-2xl font-semibold">{t('distributed.issues.title')}</h3>
        </div>
        <div className="space-y-4">
          {issues.map((issue, index) => (
            <IssueCard key={index} title={issue.title} description={issue.description} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default DistributedInfraSection;
