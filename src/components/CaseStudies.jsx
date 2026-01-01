import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CaseStudies = () => {
  const { t } = useTranslation();
  const cases = t('cases.items', { returnObjects: true });

  return (
    <section id="cases" className="section bg-navy-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-white text-[var(--font-size-h2)] font-bold mb-4">{t('cases.title')}</h2>
          <p className="text-lg text-text-muted">{t('cases.description')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {(Array.isArray(cases) ? cases : []).map((item, index) => (
            <motion.div
              key={index}
              className="group relative bg-navy-950 border border-glass-border rounded-lg overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-navy-800 hover:border-white/20 hover:shadow-premium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-56 bg-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-grad-primary opacity-20 transition-opacity duration-500 group-hover:opacity-40" />
              </div>
              <div className="p-8">
                <span className="inline-block px-4 py-1.5 bg-grad-accent text-white text-[10px] font-bold uppercase tracking-wider rounded-full mb-6 italic">
                  {item.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-text-muted mb-8 line-height-relaxed">{item.description}</p>
                <a href="#" className="flex items-center gap-2 text-white font-semibold text-sm transition-all duration-300 group-hover:gap-4 group-hover:text-accent">
                  {t('cases.btnMore')} <span className="text-lg">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
