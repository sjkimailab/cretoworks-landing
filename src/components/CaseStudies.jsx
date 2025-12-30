import React from 'react';
import { motion } from 'framer-motion';
import './CaseStudies.css';

const CaseStudies = () => {
  const cases = [
    {
      title: "AI 기술을 접목한 스마트 팩토리",
      description: "생산 공정 자동화 및 예측 유지보수 솔루션",
      tag: "Automation"
    },
    {
      title: "생성형 AI 기반 고객 상담 챗봇",
      description: "24/7 자연스러운 응대와 데이터 분석",
      tag: "GPT-4"
    },
    {
      title: "AI 비즈니스 프로세스 효율화",
      description: "워크플로우 최적화 및 비용 절감",
      tag: "Consulting"
    }
  ];

  return (
    <section id="cases" className="section cases">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">고객사 사례</h2>
          <p className="section-subtitle">다양한 산업 분야에서 입증된 Creto Works의 인공지능 솔루션</p>
        </div>
        
        <div className="cases-grid">
          {cases.map((item, index) => (
            <motion.div 
              key={index} 
              className="case-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="case-image">
                <div className="image-placeholder"></div>
              </div>
              <div className="case-info">
                <span className="case-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href="#" className="case-more">더보기 →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
