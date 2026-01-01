import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Process = () => {
  const { t } = useTranslation();
  const steps = t('process.steps', { returnObjects: true });

  return (
    <section id="process" className="section bg-navy-950">
      <div className="container">
        <div className="text-center mb-16 md:mb-24">
          <span className="badge">{t('process.badge')}</span>
          <h2 className="text-white text-[var(--font-size-h2)] font-bold mt-4 mb-6 leading-tight tracking-tight">{t('process.title')}</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">{t('process.description')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {(Array.isArray(steps) ? steps : []).map((step, index) => (
            <motion.div
              key={index}
              className="group relative p-8 rounded-lg bg-navy-900 border border-glass-border transition-all duration-300 hover:border-white/20 hover:bg-navy-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-black text-white/5 mb-6 transition-colors group-hover:text-primary/20">
                {step.num}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4 italic tracking-tight">{step.title}</h3>
                <p className="text-text-muted text-[15px] leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
