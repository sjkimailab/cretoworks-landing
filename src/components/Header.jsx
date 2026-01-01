import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.svg';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-navy-950/80 backdrop-blur-md border-b border-glass-border py-4' : 'bg-transparent py-6'}`}>
      <div className="container flex items-center justify-between">
        <div className="flex-shrink-0">
          <img src={logoImg} alt="CretoWorks" className="h-10 w-auto" />
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-sm font-medium tracking-wide">
            <li><a href="#services" className="text-text-muted hover:text-white transition-colors">{t('header.service')}</a></li>
            <li><a href="#team" className="text-text-muted hover:text-white transition-colors">{t('header.team')}</a></li>
            <li><a href="#blog" className="text-text-muted hover:text-white transition-colors">{t('header.blog')}</a></li>
            <li><a href="#contact" className="text-text-muted hover:text-white transition-colors">{t('header.contact')}</a></li>
          </ul>
        </nav>
        <div className="flex items-center gap-6">
          <LanguageSwitcher />
          <a href="#contact" className="hidden sm:inline-flex btn btn-outline !px-6 !py-2 !text-sm">{t('header.contact')}</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
