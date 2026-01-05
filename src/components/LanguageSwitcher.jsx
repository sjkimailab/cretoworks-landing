import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    const languages = [
        { code: 'ko', name: 'KR' },
        { code: 'en', name: 'EN' },
        { code: 'zh', name: 'CN' }
    ];

    const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

    return (
        <motion.div
            className={`language-switcher ${isOpen ? 'open' : ''}`}
            layout
            onClick={() => setIsOpen(!isOpen)}
        >
            <Globe size={16} className="globe-icon" />
            <div className="lang-options">
                <AnimatePresence mode="popLayout" initial={false}>
                    {isOpen ? (
                        languages.map((lang) => (
                            <motion.button
                                key={lang.code}
                                layout
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2 }}
                                className={`lang-btn ${i18n.language === lang.code ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    changeLanguage(lang.code);
                                }}
                            >
                                {lang.name}
                            </motion.button>
                        ))
                    ) : (
                        <motion.button
                            layout
                            key="current"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="lang-btn active"
                        >
                            {currentLang.name}
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default LanguageSwitcher;
