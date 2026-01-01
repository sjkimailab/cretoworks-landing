import heroVisualImg from '../assets/generated/hero_visual.png';
import './Hero.css';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1>
            {t('hero.title1')}<br className="desktop-only" />
            <span className="accent-text">{t('hero.title2')}</span>
          </h1>
          <p className="hero-description">
            {t('hero.description')}
          </p>
          <div className="hero-btns">
            <button className="btn btn-primary">{t('hero.btnContact')}</button>
            <button className="btn btn-outline">{t('hero.btnCases')}</button>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="hero-image-wrapper">
            <img
              src={heroVisualImg}
              alt="AI Technology Visual"
              className="hero-main-image"
            />
            <div className="glass-overlay"></div>
          </div>
          <div className="floating-elements">
            <div className="float-item item-1"></div>
            <div className="float-item item-2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
