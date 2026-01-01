import React from 'react';
import './Footer.css';
import logoImg from '../assets/logo.svg';
import { useTranslation } from 'react-i18next';

const Footer = ({ onPrivacyClick }) => {
  const { t } = useTranslation();
  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logoImg} alt="CretoWorks" />
            </div>
            <p className="footer-desc">
              {t('footer.desc')}
            </p>
            <div className="footer-info">
              <p className="company-name">{t('footer.companyName')}</p>
              <p>{t('footer.businessNumber')}</p>
              <p>{t('footer.address')}</p>
              <p>{t('footer.representative')}</p>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>{t('footer.service')}</h4>
              <ul>
                <li><a href="#services">{t('header.service')}</a></li>
                <li><a href="#cases">{t('cases.title')}</a></li>
                <li><a href="#process">{t('process.title')}</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>{t('footer.company')}</h4>
              <ul>
                <li><a href="#team">{t('header.team')}</a></li>
                <li><a href="#blog">{t('header.blog')}</a></li>
                <li><button onClick={onPrivacyClick} className="footer-link-btn">{t('privacy.title')}</button></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>{t('footer.support')}</h4>
              <ul>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">{t('header.contact')}</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {t('footer.companyName')} {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
