import React from 'react';
import { motion } from 'framer-motion';
import './CaseStudies.css';

const CaseStudies = () => {
  const cases = [
    {
      title: "AI 헤어 체험 솔루션",
      description: "고객의 얼굴형에 최적화된 헤어스타일을 실시간으로 추천하여 방문 예약률을 40% 향상시켰습니다.",
      tag: "AI Store Integration"
    },
    {
      title: "맞춤형 GPT 상담 챗봇",
      description: "24시간 자동화된 고객 응대 시스템을 통해 상담원 업무량을 60% 절감하고 고객 만족도를 높였습니다.",
      tag: "GPT Solution"
    },
    {
      title: "자동화 PPT 생성 엔진",
      description: "입력된 교육 내용을 바탕으로 카드뉴스와 PPT를 즉시 생성하는 툴을 개발하여 콘텐츠 제작 시간을 80% 단축했습니다.",
      tag: "Automation"
    }
  ];

  return (
    <section id="cases" className="section cases">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">고객사 사례</h2>
          <p className="section-subtitle">다양한 산업 분야에서 입증된 CretoWorks의 인공지능 솔루션</p>
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
