import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'nav.intro', href: '#intro' },
    { key: 'nav.simple', href: '#simple' },
    { key: 'nav.distributed', href: '#distributed' },
    { key: 'nav.secured', href: '#secured' },
    { key: 'nav.conclusion', href: '#conclusion' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-gradient-primary">
          WebInfra
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {t(item.key)}
            </a>
          ))}
          <LanguageToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-lg p-4">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-muted-foreground hover:text-foreground transition-colors duration-200 border-b border-border last:border-0"
            >
              {t(item.key)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
