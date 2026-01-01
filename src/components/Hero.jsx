import React from 'react';
import { motion } from 'framer-motion';
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
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Simple. Fast. Affordable.<br />
            <span className="accent-text">AI for Everyone</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            맞춤형 AI부터 웹·앱 제작, 교육·채용까지<br />
            cretoworks와 한 번에
          </motion.p>

          <motion.div
            className="hero-btns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <button className="btn btn-primary">문의하기</button>
            <button className="btn btn-outline">성공사례 보기</button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
        >
          <div className="hero-image-wrapper">
            <img src="/src/assets/hero-visual.png" alt="AI Visual" className="hero-main-image" />
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
