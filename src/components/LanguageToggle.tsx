import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 glass rounded-full px-2 py-1">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
          language === 'en'
            ? 'bg-gradient-primary text-primary-foreground glow-cyan'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
          language === 'fr'
            ? 'bg-gradient-primary text-primary-foreground glow-cyan'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageToggle;
