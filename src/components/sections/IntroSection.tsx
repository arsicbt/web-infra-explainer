import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionWrapper from '../SectionWrapper';
import SectionHeader from '../SectionHeader';
import { Target, BookOpen, GraduationCap } from 'lucide-react';

const IntroSection: React.FC = () => {
  const { t } = useLanguage();

  const goals = [
    t('intro.goal.1'),
    t('intro.goal.2'),
    t('intro.goal.3'),
    t('intro.goal.4'),
  ];

  return (
    <SectionWrapper id="intro">
      <SectionHeader title={t('intro.title')} subtitle={t('intro.subtitle')} accentColor="cyan" />

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Main Content */}
        <div className="glass rounded-2xl p-8 border border-border">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {t('intro.p1')}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('intro.p2')}
          </p>
        </div>

        {/* Goals */}
        <div className="glass rounded-2xl p-8 border border-neon-cyan/20">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-neon-cyan" />
            <h3 className="text-xl font-semibold">{t('intro.goal.title')}</h3>
          </div>
          <ul className="space-y-4">
            {goals.map((goal, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neon-cyan/20 text-neon-cyan flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </span>
                <span className="text-muted-foreground">{goal}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Holberton Context */}
        <div className="glass rounded-2xl p-8 border border-neon-violet/20">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-neon-violet/10">
              <GraduationCap className="w-8 h-8 text-neon-violet" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-neon-violet" />
                Holberton School
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('intro.holberton')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default IntroSection;
