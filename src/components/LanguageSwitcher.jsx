import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const languages = [
        { code: 'ko', name: 'KR' },
        { code: 'en', name: 'EN' },
        { code: 'zh', name: 'CN (Simplified)' }
    ];

    return (
        <div className="language-switcher">
            <Globe size={16} />
            <div className="lang-options">
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        className={`lang-btn ${i18n.language === lang.code ? 'active' : ''}`}
                        onClick={() => changeLanguage(lang.code)}
                    >
                        {lang.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LanguageSwitcher;
