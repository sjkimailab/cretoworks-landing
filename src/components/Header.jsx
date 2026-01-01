import React from 'react';
import './Header.css';
import logoImg from '../assets/logo.svg';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import useScroll from '../hooks/useScroll';

const Header = () => {
  const { t } = useTranslation();
  const isScrolled = useScroll(20);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <img src={logoImg} alt="CretoWorks" />
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#services">{t('header.service')}</a></li>
            <li><a href="#team">{t('header.team')}</a></li>
            <li><a href="#blog">{t('header.blog')}</a></li>
            <li><a href="#contact">{t('header.contact')}</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <LanguageSwitcher />
          <a href="#contact" className="btn btn-outline btn-sm">{t('header.contact')}</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
