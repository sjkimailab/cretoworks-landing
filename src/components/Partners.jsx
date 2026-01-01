import React from 'react';
import './Partners.css';

const Partners = () => {
  const partners = ['Samsung', 'LG', 'Hyundai', 'SK Telecom', 'Naver'];

  return (
    <div className="partners">
      <div className="container partners-container">
        <p className="partners-title">Trusted by industry leaders</p>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
