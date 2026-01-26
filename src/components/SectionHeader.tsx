import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  accentColor?: 'cyan' | 'violet' | 'orange';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, accentColor = 'cyan' }) => {
  const gradientClass = {
    cyan: 'text-gradient-primary',
    violet: 'bg-gradient-accent bg-clip-text text-transparent',
    orange: 'text-neon-orange',
  }[accentColor];

  return (
    <div className="text-center mb-16">
      <span className={`text-sm font-semibold uppercase tracking-wider ${gradientClass}`}>
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-foreground">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
