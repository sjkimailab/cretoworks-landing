import React from 'react';
import { motion } from 'framer-motion';
import './CaseStudies.css';
import { useTranslation } from 'react-i18next';

const CaseStudies = () => {
  const { t } = useTranslation();
  const cases = t('cases.items', { returnObjects: true });

  return (
    <section id="cases" className="section cases">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('cases.title')}</h2>
          <p className="section-subtitle">{t('cases.description')}</p>
        </div>

        <div className="cases-grid">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              className="case-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="case-image">
                <div className="image-placeholder"></div>
              </div>
              <div className="case-info">
                <span className="case-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href="#" className="case-more">{t('cases.btnMore')} →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
