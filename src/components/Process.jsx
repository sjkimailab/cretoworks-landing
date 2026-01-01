import React from 'react';
import { motion } from 'framer-motion';
import './Process.css';

const Process = () => {
  const steps = [
    { num: "01", title: "상담 및 요구사항 분석", desc: "고객사의 비즈니스 목표를 깊이 있게 상담하여 핵심 가치를 도출합니다." },
    { num: "02", title: "맞춤형 아키텍처 설계", desc: "분석된 데이터를 바탕으로 확장 가능한 최적의 AI 시스템을 설계합니다." },
    { num: "03", title: "애자일 개발 및 검증", desc: "신속한 개발과 철저한 품질 테스트를 통해 서비스의 완성도를 높입니다." },
    { num: "04", title: "배포 및 지속적 고도화", desc: "안정적인 배포 후에도 실사용 데이터를 분석하여 성능을 고도화합니다." }
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
