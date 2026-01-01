import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageSquare, Presentation, Image as ImageIcon, Code, Zap } from 'lucide-react';
import './Services.css';

const Services = () => {
  const aiStoreItems = [
    {
      title: "헤어스타일 생성기",
      price: "월 2.9만~",
      description: "다양한 헤어스타일을 미리 체험하고 어울리는 스타일을 찾아보세요.",
      icon: <Sparkles size={32} />,
      tag: "AI Store"
    },
    {
      title: "GPT 챗봇",
      price: "월 9.9만~",
      description: "고객 응대부터 내부 업무 보조까지, 맞춤형 AI 상담사를 구축하세요.",
      icon: <MessageSquare size={32} />,
      tag: "AI Store"
    },
    {
      title: "PPT 생성기",
      price: "1회 1.9만~",
      description: "주제만 입력하면 전문적인 디자인의 PPT를 즉시 생성해 드립니다.",
      icon: <Presentation size={32} />,
      tag: "AI Store"
    },
    {
      title: "이미지 생성기",
      price: "월 4.9만~",
      description: "고품질의 커스텀 이미지를 생성하여 마케팅 자료 등에 활용하세요.",
      icon: <ImageIcon size={32} />,
      tag: "AI Store"
    }
  ];

  const customServices = [
    {
      title: "맞춤 웹, 앱 제작",
      description: "원하시는 산업·목적·예산으로 문의 주시면 빠르게 제안 드립니다.",
      options: [
        { label: "산업", value: "스타트업, 공공/교육, 제조/물류, 커머스/리테일, 기타" },
        { label: "예산", value: "1천만원 이하 ~ 7천만원 이상" },
        { label: "목적", value: "프로토타입, MVP, 리뉴얼, 고도화" }
      ],
      icon: <Code size={48} />
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-header">
          <span className="badge">Service Overview</span>
          <h2>우리만의 특별한 AI 솔루션</h2>
          <p>자사 서비스에 맞춤 API를 접목하고 업무 생산성을 극대화하세요.</p>
        </div>

        {/* Custom Dev Section */}
        <div className="custom-dev-grid">
          {customServices.map((service, idx) => (
            <motion.div
              key={idx}
              className="custom-dev-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="card-top">
                <div className="icon-box">{service.icon}</div>
                <div className="text-box">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
              <div className="options-grid">
                {service.options.map((opt, i) => (
                  <div key={i} className="option-item">
                    <span className="label">{opt.label}</span>
                    <span className="value">{opt.value}</span>
                  </div>
                ))}
              </div>
              <button className="btn btn-primary">문의하기</button>
            </motion.div>
          ))}
        </div>

        {/* AI Store Section */}
        <div className="section-header mt-lg">
          <span className="badge blue">AI Store</span>
          <h2>AI 스토어 & 맞춤 AI 개발</h2>
        </div>

        <div className="bento-grid">
          {aiStoreItems.map((item, index) => (
            <motion.div
              key={index}
              className={`bento-card card-${index + 1}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="card-badge">{item.tag}</div>
              <div className="card-icon">{item.icon}</div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <span className="price">{item.price}</span>
                <p>{item.description}</p>
              </div>
              <div className="card-footer">
                <button className="btn-text">데모 보기</button>
                <button className="btn-text">문의하기</button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Consultancy Section */}
        <div className="consultancy-box">
          <div className="consultancy-content">
            <span className="badge accent">기술 컨설팅 & 강의</span>
            <h3>AI·웹·앱·SW 자문 / 맞춤 AI 강의</h3>
            <div className="course-tags">
              <span>바이브코딩</span>
              <span>딥러닝 기초</span>
              <span>비전 DL</span>
              <span>NLP·RAG</span>
            </div>
          </div>
          <button className="btn btn-outline">더보기</button>
        </div>
      </div>
    </section>
  );
};

export default Services;

