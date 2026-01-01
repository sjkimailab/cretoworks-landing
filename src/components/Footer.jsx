import React from 'react';
import logoImg from '../assets/logo.svg';
import { useTranslation } from 'react-i18next';

const Footer = ({ onPrivacyClick }) => {
  const { t } = useTranslation();
  return (
    <footer className="bg-navy-950 text-white border-t border-glass-border pt-24 pb-12">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-32 mb-16 md:mb-24">
          <div className="flex-1 max-w-[400px]">
            <div className="mb-8">
              <img src={logoImg} alt="CretoWorks" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-text-muted leading-relaxed text-base mb-8">
              {t('footer.desc')}
            </p>
            <div className="flex flex-col gap-1.5">
              <p className="text-text-muted font-bold mb-1">{t('footer.companyName')}</p>
              <p className="text-text-dim text-sm">{t('footer.businessNumber')}</p>
              <p className="text-text-dim text-sm">{t('footer.address')}</p>
              <p className="text-text-dim text-sm">{t('footer.representative')}</p>
            </div>
          </div>

          <div className="flex-[2] grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-16">
            <div className="flex flex-col gap-6">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest">{t('footer.service')}</h4>
              <ul className="flex flex-col gap-4">
                <li><a href="#services" className="text-text-muted hover:text-white transition-all hover:translate-x-1 inline-block text-[15px]">{t('header.service')}</a></li>
                <li><a href="#cases" className="text-text-muted hover:text-white transition-all hover:translate-x-1 inline-block text-[15px]">{t('cases.title')}</a></li>
                <li><a href="#process" className="text-text-muted hover:text-white transition-all hover:translate-x-1 inline-block text-[15px]">{t('process.title')}</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest">{t('footer.company')}</h4>
              <ul className="flex flex-col gap-4">
                <li><a href="#team" className="text-text-muted hover:text-white transition-all hover:translate-x-1 inline-block text-[15px]">{t('header.team')}</a></li>
                <li><a href="#blog" className="text-text-muted hover:text-white transition-all hover:translate-x-1 inline-block text-[15px]">{t('header.blog')}</a></li>
                <li><button onClick={onPrivacyClick} className="text-text-muted hover:text-white transition-all hover:translate-x-1 inline-block text-[15px] text-left">{t('privacy.title')}</button></li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest">{t('footer.support')}</h4>
              <ul className="flex flex-col gap-4">
                <li><a href="#faq" className="text-text-muted hover:text-white transition-all hover:translate-x-1 inline-block text-[15px]">FAQ</a></li>
                <li><a href="#contact" className="text-text-muted hover:text-white transition-all hover:translate-x-1 inline-block text-[15px]">{t('header.contact')}</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-glass-border pt-8 text-text-muted text-sm text-left">
          <p>&copy; {new Date().getFullYear()} {t('footer.companyName')} {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
