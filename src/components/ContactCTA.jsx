import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import logoIcon from '../assets/logo-icon.svg';

const ContactCTA = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="section bg-navy-950 border-t border-glass-border">
      <div className="container">
        <motion.div
          className="bg-grad-surface border border-glass-border rounded-lg p-12 md:p-24 text-center max-w-5xl mx-auto shadow-premium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 mx-auto mb-8 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
            <img src={logoIcon} alt="CretoWorks" className="w-10 h-10 opacity-80" />
          </div>
          <h2 className="text-white text-[var(--font-size-h2)] font-bold mb-6 leading-tight">{t('contact.title')}</h2>
          <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto">{t('contact.description')}</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="btn btn-primary px-10 py-5 text-lg">{t('contact.btnContact')}</Link>
            <button className="btn btn-outline px-10 py-5 text-lg">{t('contact.btnIntro')}</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
