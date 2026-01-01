import React from 'react';
import { motion } from 'framer-motion';
import './ContactCTA.css';
import { useTranslation } from 'react-i18next';
import Logo3D from './Logo3D';

const ContactCTA = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="section contact-cta">
      <div className="container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="cta-logo">
            <Logo3D />
          </div>
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.description')}</p>
          <div className="cta-btns">
            <button className="btn btn-primary btn-lg">{t('contact.btnContact')}</button>
            <button className="btn btn-outline btn-lg">{t('contact.btnIntro')}</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
