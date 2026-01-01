import React from 'react';
import { motion } from 'framer-motion';
import './ContactCTA.css';

const ContactCTA = () => {
  return (
    <section id="contact" className="section contact-cta">
      <div className="container">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>새로운 비즈니스의 시작,<br className="desktop-only" /> 지금 바로 AI 전환을 경험하세요</h2>
          <p>CretoWorks의 전문가들이 직접 성장을 고민하고<br className="desktop-only" /> 실질적인 결과로 증명해 드립니다.</p>
          <div className="cta-btns">
            <button className="btn btn-primary">문의하기</button>
            <button className="btn btn-outline">소개서 다운로드</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
