import React from 'react';
import './Process.css';

const Process = () => {
  const steps = [
    { num: "01", title: "상담 및 분석", desc: "고객사의 니즈와 현황을 분석하여 최적의 방향을 제시합니다." },
    { num: "02", title: "제안 및 계약", desc: "구체적인 솔루션 설계와 구축 계획을 제안합니다." },
    { num: "03", title: "개발 및 테스트", desc: "전문 엔지니어의 개발과 철저한 품질 검증을 거칩니다." },
    { num: "04", title: "유지보수 및 고도화", desc: "시스템의 안정적 운영과 성과 분석을 기반으로 고도화합니다." }
  ];

  return (
    <section id="process" className="section process">
      <div className="container">
        <h2 className="section-title text-center" style={{ textAlign: 'center', marginBottom: '60px' }}>도입 절차</h2>
        <div className="process-grid">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-num">{step.num}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              {index < steps.length - 1 && <div className="step-line"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
