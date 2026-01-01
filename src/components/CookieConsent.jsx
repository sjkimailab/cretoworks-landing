import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './CookieConsent.css';

const CookieConsent = ({ onPrivacyClick }) => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookie-consent', 'rejected');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="cookie-consent"
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <div className="cookie-content">
                        <div className="cookie-header">
                            <div className="cookie-icon-wrapper">
                                <Cookie size={20} className="cookie-icon" />
                            </div>
                            <h3>{t('cookie.title')}</h3>
                            <button className="close-btn" onClick={handleReject}>
                                <X size={18} />
                            </button>
                        </div>
                        <p>{t('cookie.description')}</p>
                        <div className="cookie-actions">
                            <button className="cookie-privacy-btn" onClick={onPrivacyClick}>
                                {t('cookie.linkPrivacy')}
                            </button>
                            <button className="cookie-privacy-btn" onClick={handleReject}>
                                {t('cookie.btnReject')}
                            </button>
                            <button className="btn btn-primary btn-sm" onClick={handleAccept}>
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
