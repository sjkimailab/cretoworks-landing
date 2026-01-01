import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import customDevImg from '../assets/generated/custom_dev.png';
import techPatternImg from '../assets/generated/tech_pattern.png';
import { useTranslation } from 'react-i18next';

const CustomDevCard = ({ service, t }) => (
  <motion.div
    className="relative flex flex-col gap-12 p-8 md:p-16 rounded-lg bg-navy-900 border border-glass-border shadow-premium overflow-hidden group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    {/* Background Decorative Layer */}
    <div className="absolute top-0 right-0 w-[40%] h-full opacity-25 pointer-events-none bg-cover bg-center [background-image:var(--custom-dev-bg)]" />

    <div className="relative z-10 flex items-center gap-6">
      <div className="w-20 h-20 bg-grad-primary rounded-2xl flex items-center justify-center text-white">
        {service.icon}
      </div>
      <div className="flex-1">
        <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
        <p className="text-text-muted">{service.description}</p>
      </div>
    </div>

    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
      {service.options.map((opt, i) => (
        <div key={i} className="flex flex-col">
          <span className="text-xs font-bold uppercase tracking-wider text-accent mb-1">{opt.label}</span>
          <span className="text-base font-medium text-text-main">{opt.value}</span>
        </div>
      ))}
    </div>

    <button className="relative z-10 btn btn-primary w-fit">
      {t('services.customDev.btnContact')}
    </button>
  </motion.div>
);

const ConsultancyBox = ({ t }) => (
  <div className="mt-16 bg-grad-surface rounded-md p-8 md:px-16 md:py-12 border border-glass-border flex flex-col lg:flex-row items-center justify-between gap-8">
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
      <span className="badge mb-4">{t('services.consultancy.badge')}</span>
      <h3 className="text-2xl font-bold text-white">{t('services.consultancy.title')}</h3>
      <div className="mt-6 flex flex-wrap gap-3">
        {(t('services.consultancy.tags', { returnObjects: true }) || []).map((tag, i) => (
          <span key={i} className="px-4 py-2 bg-white/5 rounded-full text-sm text-text-muted transition-colors hover:bg-white/10">
            {tag}
          </span>
        ))}
      </div>
    </div>
    <button className="btn btn-outline">{t('services.consultancy.btnMore')}</button>
  </div>
);

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
    <section
      id="services"
      className="relative section bg-navy-950 overflow-hidden"
      style={{
        '--tech-pattern': `url(${techPatternImg})`,
        '--custom-dev-bg': `linear-gradient(to right, var(--color-navy-900), transparent), url(${customDevImg})`
      }}
    >
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-repeat [background-size:600px] [background-image:var(--tech-pattern)]" />

      <div className="container relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <span className="badge">{t('services.badge')}</span>
          <h2 className="text-white text-[var(--font-size-h2)] mt-4 mb-6 font-bold tracking-tight">
            {t('services.title')}
          </h2>
          <p className="text-lg text-text-muted leading-relaxed max-w-[600px] mx-auto">
            {t('services.description')}
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {customServices.map((service, idx) => (
            <CustomDevCard key={idx} service={service} t={t} />
          ))}
        </div>

        <ConsultancyBox t={t} />
      </div>
    </section>
  );
};

export default Services;
