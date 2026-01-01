import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
    const { t } = useTranslation();
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <section className="min-h-[80vh] flex items-center justify-center pt-32 pb-20">
                <motion.div
                    className="container max-w-2xl text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <div className="w-20 h-20 bg-grad-primary rounded-full flex items-center justify-center mx-auto mb-8 text-white shadow-premium">
                        <CheckCircle size={40} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        {t('contact.successTitle') || 'Thank You!'}
                    </h1>
                    <p className="text-xl text-text-muted mb-12">
                        {t('contact.successDesc') || 'Your message has been received. Our team will get back to you shortly.'}
                    </p>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="btn btn-primary px-10"
                    >
                        {t('contact.btnBack') || 'Go Back'}
                    </button>
                </motion.div>
            </section>
        );
    }

    return (
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-navy-950 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-grad-primary opacity-5 blur-[120px] pointer-events-none rounded-full" />
            <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-grad-primary opacity-5 blur-[100px] pointer-events-none rounded-full" />

            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="badge mb-6">{t('contact.badge') || 'Inquiry'}</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
                            {t('contact.title')}
                        </h1>
                        <p className="text-xl text-text-muted mb-12 max-w-lg leading-relaxed">
                            {t('contact.description')}
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-text-dim mb-1">Email</h4>
                                    <p className="text-lg text-white font-medium">contact@cretoworks.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-text-dim mb-1">Phone</h4>
                                    <p className="text-lg text-white font-medium">+82 02-123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-text-dim mb-1">Office</h4>
                                    <p className="text-lg text-white font-medium">Teheran-ro, Gangnam-gu, Seoul</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        className="bg-grad-surface border border-glass-border rounded-2xl p-8 md:p-12 shadow-premium"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-text-muted ml-1">{t('contact.labelName')}</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formState.name}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors hover:border-white/20"
                                        placeholder={t('contact.placeholderName')}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-text-muted ml-1">{t('contact.labelEmail')}</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formState.email}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors hover:border-white/20"
                                        placeholder={t('contact.placeholderEmail')}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-text-muted ml-1">{t('contact.labelSubject')}</label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    value={formState.subject}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors hover:border-white/20"
                                    placeholder={t('contact.placeholderSubject')}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-text-muted ml-1">{t('contact.labelMessage')}</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="5"
                                    value={formState.message}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors hover:border-white/20 resize-none"
                                    placeholder={t('contact.placeholderMessage')}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-primary w-full py-4 text-lg flex items-center justify-center gap-3 transition-transform active:scale-[0.98]"
                            >
                                {isSubmitting ? t('contact.sending') : t('contact.btnSend')}
                                {!isSubmitting && <Send size={20} />}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
