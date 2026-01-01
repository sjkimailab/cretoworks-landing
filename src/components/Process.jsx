import React from 'react';
import { motion } from 'framer-motion';
import './Process.css';

const Process = () => {
  const steps = [
    { num: "01", title: "상담 및 요구사항 분석", desc: "고객사의 비즈니스 목표와 기술적 요구사항을 깊이 있게 상담하고 분석합니다." },
    { num: "02", title: "맞춤 솔루션 설계", desc: "분석된 데이터를 바탕으로 최적의 AI 아키텍처와 구축 전략을 설계합니다." },
    { num: "03", title: "개발 및 반복적 테스트", desc: "애자일 방식으로 신속하게 개발하며 철저한 품질 검증을 수행합니다." },
    { num: "04", title: "배포 및 성과 고도화", desc: "안정적으로 서비스를 배포하고 실사용 피드백을 통해 솔루션을 고도화합니다." }
  ];

  return (
    <section id="process" className="section process">
      <div className="container">
        <div className="section-header">
          <span className="badge">Our Process</span>
          <h2>체계적인 도입 절차</h2>
          <p>아이디어부터 실제 서비스 운영까지, CretoWorks가 함께합니다.</p>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="process-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="process-num">{step.num}</div>
              <div className="process-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
