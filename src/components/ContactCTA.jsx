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
          <h2>지금 바로 AI 전환을 시작하세요</h2>
          <p>CretoWorks와 함께라면 가능합니다. 전문가와 상담을 시작해보세요.</p>
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
