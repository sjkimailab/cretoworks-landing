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
            answer: "프로젝트의 복잡도와 모델 요구사항에 따라 달라집니다. CretoWorks는 소상공인을 위한 저비용 AI 스토어 솔루션부터 엔터프라이즈급 맞춤 개발까지, 고객사의 예산 상황에 맞춘 최적화된 플랜을 제안해 드립니다."
        },
        {
            question: "서비스 구축 기간은 얼마나 걸리나요?",
            answer: "AI 스토어의 기성 솔루션은 즉시 도입이 가능하며, 맞춤형 AI 프로젝트는 보통 4주에서 12주 정도 소요됩니다. 초기 상담 단계에서 상세 로드맵을 제공해 드립니다."
        },
        {
            question: "기술적인 지식이 없어도 이용 가능한가요?",
            answer: "물론입니다. CretoWorks는 기획부터 개발, 실제 운영까지 모든 기술적 과정을 전담합니다. 고객님은 비즈니스 아이디어와 활용 방안에만 집중하실 수 있도록 기술 컨설팅을 밀착 지원합니다."
        },
        {
            question: "사후 관리 및 유지보수는 어떻게 진행되나요?",
            answer: "서비스가 안정적으로 유지될 수 있도록 전담 팀이 실시간 모니터링을 진행합니다. 또한 빠르게 발전하는 AI 기술 트렌드에 맞춰 정기적인 모델 고도화와 보안 업데이트를 약속드립니다."
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
