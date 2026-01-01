import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';
import { useTranslation } from 'react-i18next';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <div className="faq-question">
                <h3>{question}</h3>
                <div className="faq-icon">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <p>{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const { t } = useTranslation();
    const faqItems = t('faq.items', { returnObjects: true });

    return (
        <section id="faq" className="section faq">
            <div className="container">
                <div className="section-header text-center">
                    <span className="badge">{t('faq.badge')}</span>
                    <h2>{t('faq.title')}</h2>
                    <p>{t('faq.description')}</p>
                </div>
                <div className="faq-list">
                    {faqItems.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
