import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`relative bg-navy-900 border border-glass-border rounded-lg px-8 py-6 cursor-pointer transition-all duration-500 overflow-hidden ${isOpen ? 'border-primary bg-navy-800' : 'hover:border-white/20 hover:bg-navy-800'}`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex justify-between items-center gap-4">
                <h3 className="text-xl font-semibold text-white leading-snug tracking-tight m-0">
                    {question}
                </h3>
                <div className={`flex-shrink-0 transition-all duration-300 ${isOpen ? 'text-primary rotate-180' : 'text-text-muted rotate-0'}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pt-6 pb-2 text-text-muted text-base leading-relaxed m-0 text-balance">
                            {answer}
                        </p>
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
        <section id="faq" className="section bg-navy-950">
            <div className="container">
                <div className="text-center mb-16">
                    <span className="badge">{t('faq.badge')}</span>
                    <h2 className="text-white text-[var(--font-size-h2)] font-bold mt-4 mb-4 leading-tight">{t('faq.title')}</h2>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto">{t('faq.description')}</p>
                </div>
                <div className="max-w-[900px] mx-auto flex flex-col gap-4">
                    {(Array.isArray(faqItems) ? faqItems : []).map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
