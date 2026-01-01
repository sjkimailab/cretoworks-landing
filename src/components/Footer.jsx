import logoImg from '../assets/logo.png';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer section">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logoImg} alt="CretoWorks" />
          </div>
          <p className="footer-desc">
            {t('footer.desc')}
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>{t('footer.service')}</h4>
            <ul>
              <li><a href="#services">{t('header.service')}</a></li>
              <li><a href="#services">{t('services.consultancy.badge')}</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>{t('footer.company')}</h4>
            <ul>
              <li><a href="#team">{t('header.team')}</a></li>
              <li><a href="#blog">{t('header.blog')}</a></li>
              <li><a href="#contact">{t('header.contact')}</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>{t('footer.support')}</h4>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} CretoWorks. {t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
