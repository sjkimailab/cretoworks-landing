import React from 'react';
import { motion } from 'framer-motion';
import heroVisualImg from '../assets/generated/hero_visual.png';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen flex items-center pt-[100px] overflow-hidden bg-navy-950">
      {/* Background Decorative Blur */}
      <div className="absolute -top-[10%] -right-[5%] w-[min(80vw,600px)] h-[min(80vw,600px)] bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_70%)] blur-[80px] z-0 pointer-events-none" />

      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-32">
        <motion.div
          className="flex-[1.2] max-w-full lg:max-w-[720px] text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-[var(--font-size-h1)] mb-8 text-white font-extrabold leading-[1.1] tracking-tight">
            {t('hero.title1')}<br className="hidden lg:block" />
            <span className="block bg-grad-primary bg-clip-text text-transparent">{t('hero.title2')}</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted mb-12 leading-relaxed font-normal max-w-[640px] mx-auto lg:mx-0">
            {t('hero.description')}
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5">
            <button className="btn btn-primary min-w-[180px]">{t('hero.btnContact')}</button>
            <button className="btn btn-outline min-w-[180px]">{t('hero.btnCases')}</button>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[500px] aspect-square rounded-xl overflow-hidden border border-glass-border bg-navy-900 shadow-premium group">
            <img
              src={heroVisualImg}
              alt="AI Technology Visual"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-transparent pointer-events-none" />
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none -z-10">
            <div className="absolute w-[300px] h-[300px] -top-24 -right-24 bg-primary/15 blur-[60px] rounded-full animate-float" />
            <div className="absolute w-[200px] h-[200px] -bottom-12 -left-24 bg-accent/15 blur-[60px] rounded-full animate-float-reverse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
