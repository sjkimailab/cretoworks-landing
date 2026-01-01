import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PrivacyModal = ({ isOpen, onClose }) => {
    const { t } = useTranslation();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm z-[99998]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <motion.div
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-2xl bg-navy-900 border border-glass-border rounded-lg shadow-premium overflow-hidden z-[99999]"
                        initial={{ opacity: 0, scale: 0.9, y: "-40%" }}
                        animate={{ opacity: 1, scale: 1, y: "-50%" }}
                        exit={{ opacity: 0, scale: 0.9, y: "-40%" }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    >
                        <div className="flex items-center justify-between p-8 border-b border-white/5">
                            <div className="flex items-center gap-4">
                                <ShieldCheck size={28} className="text-accent" />
                                <h3 className="text-2xl font-bold text-white tracking-tight">{t('privacy.title')}</h3>
                            </div>
                            <button className="text-text-muted hover:text-white transition-colors" onClick={onClose}>
                                <X size={28} />
                            </button>
                        </div>

                        <div className="max-height-[60vh] overflow-y-auto p-8 custom-scrollbar space-y-8">
                            {t('privacy.sections', { returnObjects: true })?.map((section, idx) => (
                                <div key={idx} className="space-y-3">
                                    <h4 className="text-lg font-bold text-white tracking-tight">{section.title}</h4>
                                    <p className="text-text-muted text-base leading-relaxed">{section.content}</p>
                                </div>
                            ))}
                        </div>

                        <div className="p-8 border-t border-white/5 flex justify-end">
                            <button className="btn btn-primary px-8" onClick={onClose}>
                                {t('privacy.btnClose')}
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default PrivacyModal;
