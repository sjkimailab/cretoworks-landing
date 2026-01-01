import React from 'react';
import { motion } from 'framer-motion';
import './Process.css';
import { useTranslation } from 'react-i18next';

const Process = () => {
  const { t } = useTranslation();
  const steps = t('process.steps', { returnObjects: true });

  return (
    <section id="process" className="section process">
      <div className="container">
        <div className="section-header">
          <span className="badge">{t('process.badge')}</span>
          <h2>{t('process.title')}</h2>
          <p>{t('process.description')}</p>
        </div>

        <div className="process-grid">
          {(Array.isArray(steps) ? steps : []).map((step, index) => (
            <motion.div
              key={index}
              className="process-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="process-num">{step.num}</div>
              <div className="process-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
