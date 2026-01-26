import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionWrapper from '../SectionWrapper';
import SectionHeader from '../SectionHeader';
import InfoCard from '../InfoCard';
import IssueCard from '../IssueCard';
import SimpleInfraDiagram from '../diagrams/SimpleInfraDiagram';
import { Server, Globe, FileCode, Database, Wifi, HardDrive, AlertCircle } from 'lucide-react';

const SimpleInfraSection: React.FC = () => {
  const { t } = useLanguage();

  const components = [
    { icon: HardDrive, title: t('simple.server.title'), description: t('simple.server.desc'), color: 'cyan' as const },
    { icon: Globe, title: t('simple.domain.title'), description: t('simple.domain.desc'), color: 'violet' as const },
    { icon: FileCode, title: t('simple.dns.title'), description: t('simple.dns.desc'), color: 'cyan' as const },
    { icon: Server, title: t('simple.webserver.title'), description: t('simple.webserver.desc'), color: 'cyan' as const },
    { icon: Server, title: t('simple.appserver.title'), description: t('simple.appserver.desc'), color: 'violet' as const },
    { icon: Database, title: t('simple.database.title'), description: t('simple.database.desc'), color: 'orange' as const },
    { icon: Wifi, title: t('simple.communication.title'), description: t('simple.communication.desc'), color: 'cyan' as const },
  ];

  const issues = [
    { title: t('simple.spof.title'), description: t('simple.spof.desc') },
    { title: t('simple.downtime.title'), description: t('simple.downtime.desc') },
    { title: t('simple.scale.title'), description: t('simple.scale.desc') },
  ];

  return (
    <SectionWrapper id="simple" className="bg-card/30">
      <SectionHeader title={t('simple.title')} subtitle={t('simple.subtitle')} accentColor="cyan" />

      {/* Introduction */}
      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-lg text-muted-foreground text-center leading-relaxed">
          {t('simple.intro')}
        </p>
      </div>

      {/* Diagram */}
      <div className="mb-16 glass rounded-2xl p-4 border border-border">
        <SimpleInfraDiagram />
      </div>

      {/* Components Explanation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
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

      {/* Issues */}
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <AlertCircle className="w-6 h-6 text-destructive" />
          <h3 className="text-2xl font-semibold">{t('simple.issues.title')}</h3>
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

export default SimpleInfraSection;
