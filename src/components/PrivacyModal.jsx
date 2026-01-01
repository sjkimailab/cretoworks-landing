import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './PrivacyModal.css';

const PrivacyModal = ({ isOpen, onClose }) => {
    const { t } = useTranslation();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <motion.div
                        className="privacy-modal"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    >
                        <div className="modal-header">
                            <div className="header-title">
                                <ShieldCheck size={24} className="accent-icon" />
                                <h3>{t('privacy.title')}</h3>
                            </div>
                            <button className="modal-close-btn" onClick={onClose}>
                                <X size={24} />
                            </button>
                        </div>
                        <div className="modal-body custom-scrollbar">
                            {t('privacy.sections', { returnObjects: true })?.map((section, idx) => (
                                <div key={idx} className="privacy-section">
                                    <h4>{section.title}</h4>
                                    <p>{section.content}</p>
                                </div>
                            ))}
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" onClick={onClose}>
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
