import React from 'react';
import { motion } from 'framer-motion';
import './BrandPhilosophy.css';

const BrandPhilosophy = () => {
    const features = [
        "비즈니스 목표와 요구사항을 면밀히 분석해 맞춤형 AI 솔루션을 설계·개발합니다.",
        "비즈니스 목표와 요구사항을 면밀히 분석해 맞춤형 AI 솔루션을 설계·개발합니다.",
        "비즈니스 목표와 요구사항을 면밀히 분석해 맞춤형 AI 솔루션을 설계·개발합니다."
    ];

    return (
        <section className="brand-philosophy section">
            <div className="container">
                <div className="philosophy-grid">
                    <motion.div
                        className="philosophy-label"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        [ 한줄소개 ] AI 개발과 관련된 전과정을 책임집니다.
                    </motion.div>

                    <div className="features-container">
                        {features.map((text, i) => (
                            <motion.div
                                key={i}
                                className="feature-row"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <span className="feature-badge">회사 특징</span>
                                <p className="feature-text">{text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandPhilosophy;
