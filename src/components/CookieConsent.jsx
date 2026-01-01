import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CookieConsent = ({ onPrivacyClick }) => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 800); // Reduced delay for better UX
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'true');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed bottom-8 left-8 right-8 md:left-auto md:right-8 md:w-[450px] z-[9999]"
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <div className="bg-navy-900/90 backdrop-blur-xl border border-glass-border rounded-lg p-6 shadow-premium relative overflow-hidden group">
                        <div className="flex items-start justify-between gap-4 mb-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-grad-primary rounded-xl flex items-center justify-center text-white">
                                    <Cookie size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-white tracking-tight">{t('cookie.title')}</h3>
                            </div>
                            <button
                                className="text-text-muted hover:text-white transition-colors"
                                onClick={() => setIsVisible(false)}
                                aria-label="Close"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <p className="text-text-muted text-sm leading-relaxed mb-8">
                            {t('cookie.description')}
                        </p>
                        <div className="flex items-center justify-between gap-4">
                            <button
                                className="text-sm font-bold text-text-muted hover:text-primary transition-colors underline underline-offset-4"
                                onClick={() => {
                                    onPrivacyClick();
                                    // Optionally keep the banner open or close it
                                }}
                            >
                                {t('cookie.linkPrivacy')}
                            </button>
                            <button className="btn btn-primary !px-6 !py-2.5 !text-sm" onClick={handleAccept}>
                                {t('cookie.btnAccept')}
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
