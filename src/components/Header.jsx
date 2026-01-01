import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoImg from '../assets/logo.svg';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    if (pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we are on a different page, navigate to home first then anchor will work if handled
      // For simplicity, just navigate home then they can click again or we can improve this
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-navy-950/80 backdrop-blur-md border-b border-glass-border py-4' : 'bg-transparent py-6'}`}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex-shrink-0 cursor-pointer">
          <img src={logoImg} alt="CretoWorks" className="h-10 w-auto" />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-sm font-medium tracking-wide">
            <li><a href="/#services" onClick={(e) => handleNavClick(e, 'services')} className="text-text-muted hover:text-white transition-colors">{t('header.service')}</a></li>
            <li><a href="/#team" onClick={(e) => handleNavClick(e, 'team')} className="text-text-muted hover:text-white transition-colors">{t('header.team')}</a></li>
            <li><a href="/#blog" onClick={(e) => handleNavClick(e, 'blog')} className="text-text-muted hover:text-white transition-colors">{t('header.blog')}</a></li>
            <li><Link to="/contact" className={`transition-colors ${pathname === '/contact' ? 'text-primary' : 'text-text-muted hover:text-white'}`}>{t('header.contact')}</Link></li>
          </ul>
        </nav>
        <div className="flex items-center gap-6">
          <LanguageSwitcher />
          <Link to="/contact" className="hidden sm:inline-flex btn btn-outline !px-6 !py-2 !text-sm">{t('header.contact')}</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
