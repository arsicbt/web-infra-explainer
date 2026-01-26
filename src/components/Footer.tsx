import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Server } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Server className="w-6 h-6 text-neon-cyan" />
            <span className="font-bold text-lg text-gradient-primary">WebInfra</span>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground text-sm">{t('footer.project')}</p>
            <p className="text-muted-foreground/60 text-xs mt-1">{t('footer.copyright')}</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#hero"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
