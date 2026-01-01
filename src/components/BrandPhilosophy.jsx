import React from 'react';
import { motion } from 'framer-motion';
import './BrandPhilosophy.css';

const BrandPhilosophy = () => {
    const features = [
        "비즈니스 목표를 정밀하게 분석하여 마켓의 흐름을 주도하는 맞춤형 AI 솔루션을 설계합니다.",
        "기획부터 디자인, 개발, 배포까지 전 과정을 원스톱으로 처리하여 프로젝트의 완성도를 높입니다.",
        "최신 트렌드와 기술적 안정성을 동시에 고려하여 지속 가능한 비즈니스 모델 구축을 지원합니다."
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
                        <span className="accent-text">AI·IT Total Solution</span><br />
                        아이디어에서 서비스 운영까지, 전 과정을 책임지는 든든한 파트너가 되어드립니다.
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
