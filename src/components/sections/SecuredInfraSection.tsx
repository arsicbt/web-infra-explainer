import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionWrapper from '../SectionWrapper';
import SectionHeader from '../SectionHeader';
import InfoCard from '../InfoCard';
import IssueCard from '../IssueCard';
import SecuredInfraDiagram from '../diagrams/SecuredInfraDiagram';
import { Shield, Lock, Activity, BarChart3, AlertCircle } from 'lucide-react';

const SecuredInfraSection: React.FC = () => {
  const { t } = useLanguage();

  const securityComponents = [
    { icon: Shield, title: t('secured.firewall.title'), description: t('secured.firewall.desc'), color: 'orange' as const },
    { icon: Lock, title: t('secured.ssl.title'), description: t('secured.ssl.desc'), color: 'cyan' as const },
    { icon: Activity, title: t('secured.monitoring.title'), description: t('secured.monitoring.desc'), color: 'violet' as const },
  ];

  const monitoringDetails = [
    { icon: Activity, title: t('secured.collection.title'), description: t('secured.collection.desc'), color: 'violet' as const },
    { icon: BarChart3, title: t('secured.qps.title'), description: t('secured.qps.desc'), color: 'cyan' as const },
  ];

  const issues = [
    { title: t('secured.ssl.termination'), description: t('secured.ssl.termination.desc') },
    { title: t('secured.single.mysql'), description: t('secured.single.mysql.desc') },
    { title: t('secured.identical.servers'), description: t('secured.identical.servers.desc') },
  ];

  return (
    <SectionWrapper id="secured" className="bg-card/30">
      <SectionHeader title={t('secured.title')} subtitle={t('secured.subtitle')} accentColor="orange" />

      {/* Introduction */}
      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-lg text-muted-foreground text-center leading-relaxed">
          {t('secured.intro')}
        </p>
      </div>

      {/* Diagram */}
      <div className="mb-16 glass rounded-2xl p-4 border border-border">
        <SecuredInfraDiagram />
      </div>

      {/* Security Components */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {securityComponents.map((component, index) => (
          <InfoCard
            key={index}
            icon={component.icon}
            title={component.title}
            description={component.description}
            accentColor={component.color}
          />
        ))}
      </div>

      {/* Monitoring Details */}
      <div className="max-w-3xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-6 text-center">Monitoring in Detail</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {monitoringDetails.map((detail, index) => (
            <InfoCard
              key={index}
              icon={detail.icon}
              title={detail.title}
              description={detail.description}
              accentColor={detail.color}
            />
          ))}
        </div>
      </div>

      {/* Remaining Issues */}
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <AlertCircle className="w-6 h-6 text-destructive" />
          <h3 className="text-2xl font-semibold">{t('secured.remaining.title')}</h3>
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

export default SecuredInfraSection;
