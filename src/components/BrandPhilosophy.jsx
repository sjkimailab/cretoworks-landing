import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const BrandPhilosophy = () => {
    const { t } = useTranslation();
    const features = t('philosophy.features', { returnObjects: true });

    return (
        <section className="bg-navy-950 border-y border-white/10 py-24 md:py-32">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-16 lg:gap-24 items-start">
                    <motion.div
                        className="text-xl font-medium text-text-muted tracking-tight leading-relaxed"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="font-bold text-lg tracking-[0.1em] uppercase block mb-2 bg-grad-primary bg-clip-text text-transparent">
                            {t('philosophy.label')}
                        </span>
                        {t('philosophy.sublabel')}
                    </motion.div>

                    <div className="flex flex-col gap-6">
                        {(Array.isArray(features) ? features : []).map((text, i) => (
                            <motion.div
                                key={i}
                                className="flex flex-col md:flex-row items-start gap-4 md:gap-12 pb-8 border-b border-white/5 last:border-b-0"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <span className="px-3 py-1 bg-navy-800 rounded text-sm font-semibold text-text-muted whitespace-nowrap">
                                    {t('philosophy.badge')}
                                </span>
                                <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-white tracking-tight text-balance">
                                    {text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandPhilosophy;
