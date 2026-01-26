import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor?: 'cyan' | 'violet' | 'orange';
}

const InfoCard: React.FC<InfoCardProps> = ({ icon: Icon, title, description, accentColor = 'cyan' }) => {
  const colorClasses = {
    cyan: {
      icon: 'text-neon-cyan',
      glow: 'group-hover:glow-cyan',
      border: 'group-hover:border-neon-cyan/30',
    },
    violet: {
      icon: 'text-neon-violet',
      glow: 'group-hover:glow-violet',
      border: 'group-hover:border-neon-violet/30',
    },
    orange: {
      icon: 'text-neon-orange',
      glow: 'group-hover:glow-orange',
      border: 'group-hover:border-neon-orange/30',
    },
  }[accentColor];

  return (
    <div
      className={`group glass rounded-xl p-6 transition-all duration-300 border border-transparent ${colorClasses.border} ${colorClasses.glow}`}
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg bg-muted ${colorClasses.icon}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
