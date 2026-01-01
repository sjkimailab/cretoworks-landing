import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

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
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 transition-colors">
            <Globe size={14} className="text-text-muted" />
            <div className="flex items-center gap-4">
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        className={`text-[11px] font-bold tracking-widest transition-colors ${i18n.language === lang.code ? 'text-primary' : 'text-text-dim hover:text-white'}`}
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
