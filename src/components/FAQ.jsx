import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

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
    const faqs = [
        {
            question: "AI 도입 시 비용은 어느 정도 발생하나요?",
            answer: "맞춤형 AI 개발의 경우 프로젝트의 복잡도와 모델 요구사항에 따라 상이합니다. CretoWorks는 소규모 기업을 위한 AI 스토어 솔루션부터 대규모 엔터프라이즈 맞춤 개발까지 예산에 맞춘 다양한 플랜을 제공합니다."
        },
        {
            question: "서비스 구축 기간은 얼마나 걸리나요?",
            answer: "AI 스토어의 기성 솔루션은 즉시 도입이 가능하며, 맞춤형 AI 프로젝트는 보통 4주에서 12주 정도 소요됩니다. 초기 상담 단계에서 상세 로드맵을 제공해 드립니다."
        },
        {
            question: "기술적인 지식이 없어도 이용 가능한가요?",
            answer: "네, 가능합니다. CretoWorks는 기획부터 개발, 운영까지 전 과정을 케어하며, 고객사는 AI를 비즈니스에 어떻게 활용할지에만 집중하실 수 있도록 기술 컨설팅을 병행합니다."
        },
        {
            question: "사후 관리 및 유지보수는 어떻게 진행되나요?",
            answer: "배포 후에도 시스템 안정성을 모니터링하며, AI 모델의 성능 고도화 및 최신 업데이트 패치를 지속적으로 지원합니다."
        }
    ];

    return (
        <section id="faq" className="section faq">
            <div className="container">
                <div className="section-header text-center">
                    <span className="badge">Q&A</span>
                    <h2>자주 묻는 질문</h2>
                    <p>CretoWorks와 AI 도입에 대해 궁금해하시는 점들을 정리했습니다.</p>
                </div>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
