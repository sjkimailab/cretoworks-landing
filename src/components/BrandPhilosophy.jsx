import React from 'react';
import { motion } from 'framer-motion';
import './BrandPhilosophy.css';
import { useTranslation } from 'react-i18next';

const BrandPhilosophy = () => {
    const { t } = useTranslation();
    const features = t('philosophy.features', { returnObjects: true });

    return (
        <section className="brand-philosophy section">
            <div className="container">
                <div className="philosophy-grid">
                    <motion.div
                        className="philosophy-label"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="accent-text">{t('philosophy.label')}</span><br />
                        {t('philosophy.sublabel')}
                    </motion.div>

                    <div className="features-container">
                        {(Array.isArray(features) ? features : []).map((text, i) => (
                            <motion.div
                                key={i}
                                className="feature-row"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <span className="feature-badge">{t('philosophy.badge')}</span>
                                <p className="feature-text">{text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandPhilosophy;
