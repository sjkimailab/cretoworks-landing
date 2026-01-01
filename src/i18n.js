import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationKO from './locales/ko/translation.json';
import translationEN from './locales/en/translation.json';
import translationZH from './locales/zh/translation.json';

const resources = {
    ko: { translation: translationKO },
    en: { translation: translationEN },
    zh: { translation: translationZH },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'ko',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator', 'path', 'subdomain'],
            caches: ['localStorage', 'cookie'],
        },
    });

// IP-based country detection
const detectLanguageByIP = async () => {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const countryCode = data.country_code;

        let detectedLng = 'en';
        if (countryCode === 'KR') detectedLng = 'ko';
        else if (countryCode === 'CN' || countryCode === 'TW' || countryCode === 'HK') detectedLng = 'zh';

        // Only change if no saved preference exists
        if (!localStorage.getItem('i18nextLng')) {
            i18n.changeLanguage(detectedLng);
        }
    } catch (error) {
        console.error('Language detection by IP failed:', error);
    }
};

detectLanguageByIP();

export default i18n;
