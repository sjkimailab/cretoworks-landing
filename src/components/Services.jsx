import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const serviceItems = [
    {
      title: "SaaS & AI Store",
      description: "워크플로우를 즉시 개선하는 기성형 AI 솔루션",
      features: ["Custom GPTs", "Automation Tools", "API Integration"]
    },
    {
      title: "Custom Development",
      description: "기업 맞춤형 대규모 AI 시스템 기획 및 개발",
      features: ["LLM Fine-tuning", "Data Processing", "Web/App Dev"]
    },
    {
      title: "Education & Consulting",
      description: "AI 도입을 위한 전략 수립 및 임직원 실전 교육",
      features: ["AI Literacy", "Prompt Engineering", "Strategy"]
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="grid services-grid">
          {serviceItems.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="feature-list">
                {service.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
