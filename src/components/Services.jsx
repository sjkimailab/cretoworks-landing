import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import customDevImg from '../assets/generated/custom_dev.png';
import techPatternImg from '../assets/generated/tech_pattern.png';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  const customServices = [
    {
      title: t('services.customDev.title'),
      description: t('services.customDev.desc'),
      options: [
        { label: t('services.customDev.industry'), value: t('services.customDev.industryValue') },
        { label: t('services.customDev.budget'), value: t('services.customDev.budgetValue') },
        { label: t('services.customDev.purpose'), value: t('services.customDev.purposeValue') }
      ],
      icon: <Code size={48} />
    }
  ];

  return (
    <section id="services" className="section services">
      <style>{`
        .services::before {
          background-image: url(${techPatternImg}) !important;
        }
        .custom-dev-card::after {
          background-image: linear-gradient(to right, var(--color-navy-900), transparent), url(${customDevImg}) !important;
          background-size: cover;
          background-position: center;
        }
      `}</style>
      <div className="container">
        <div className="section-header">
          <span className="badge">{t('services.badge')}</span>
          <h2>{t('services.title')}</h2>
          <p>{t('services.description')}</p>
        </div>

        <div className="custom-dev-grid">
          {customServices.map((service, idx) => (
            <motion.div
              key={idx}
              className="custom-dev-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="card-top">
                <div className="icon-box">{service.icon}</div>
                <div className="text-box">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
              <div className="options-grid">
                {service.options.map((opt, i) => (
                  <div key={i} className="option-item">
                    <span className="label">{opt.label}</span>
                    <span className="value">{opt.value}</span>
                  </div>
                ))}
              </div>
              <button className="btn btn-primary" style={{ width: 'fit-content' }}>{t('services.customDev.btnContact')}</button>
            </motion.div>
          ))}
        </div>

        <div className="consultancy-box">
          <div className="consultancy-content">
            <span className="badge">{t('services.consultancy.badge')}</span>
            <h3>{t('services.consultancy.title')}</h3>
            <div className="course-tags">
              {(t('services.consultancy.tags', { returnObjects: true }) || []).map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </div>
          <button className="btn btn-outline">{t('services.consultancy.btnMore')}</button>
        </div>
      </div>
    </section>
  );
};

export default Services;

