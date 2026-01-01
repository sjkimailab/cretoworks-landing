import React from 'react';
import { motion } from 'framer-motion';
import heroVisualImg from '../assets/generated/hero_visual.png';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1>
            맞춤형 AI부터 웹·앱 제작,
            <span className="accent-text">교육·채용까지 cretoworks와 한 번에</span>
          </h1>
          <p>
            단순한 솔루션 제공을 넘어, 당신의 비즈니스가 AI 시대의 리더가 될 수 있도록 최적의 기술 파트너가 되어드립니다.
          </p>
          <div className="hero-btns">
            <button className="btn btn-primary">문의하기</button>
            <button className="btn btn-outline">성공사례 보기</button>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="hero-image-wrapper">
            <img
              src={heroVisualImg}
              alt="AI Technology Visual"
              className="hero-main-image"
            />
            <div className="glass-overlay"></div>
          </div>
          <div className="floating-elements">
            <div className="float-item item-1"></div>
            <div className="float-item item-2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
