import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionWrapper from '../SectionWrapper';
import SectionHeader from '../SectionHeader';
import { TrendingUp, Scale, Shield, CheckCircle2, Rocket } from 'lucide-react';

const ConclusionSection: React.FC = () => {
  const { t } = useLanguage();

  const takeaways = [
    { icon: TrendingUp, title: t('conclusion.evolution.title'), description: t('conclusion.evolution.desc'), color: 'text-neon-cyan' },
    { icon: Scale, title: t('conclusion.scalability.title'), description: t('conclusion.scalability.desc'), color: 'text-neon-violet' },
    { icon: Shield, title: t('conclusion.security.title'), description: t('conclusion.security.desc'), color: 'text-neon-orange' },
    { icon: CheckCircle2, title: t('conclusion.reliability.title'), description: t('conclusion.reliability.desc'), color: 'text-success' },
  ];

  return (
    <SectionWrapper id="conclusion">
      <SectionHeader title={t('conclusion.title')} subtitle={t('conclusion.subtitle')} accentColor="cyan" />

      {/* Introduction */}
      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-lg text-muted-foreground text-center leading-relaxed">
          {t('conclusion.intro')}
        </p>
      </div>

      {/* Key Takeaways */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
        {takeaways.map((takeaway, index) => (
          <div key={index} className="glass rounded-2xl p-6 border border-border hover:border-border/80 transition-colors">
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-xl bg-muted ${takeaway.color}`}>
                <takeaway.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{takeaway.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{takeaway.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Final Message */}
      <div className="max-w-3xl mx-auto">
        <div className="glass rounded-2xl p-8 border-2 border-neon-cyan/20 text-center glow-cyan">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {t('conclusion.final')}
          </p>
          <div className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full font-semibold">
            <Rocket className="w-5 h-5" />
            {t('conclusion.cta')}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ConclusionSection;
