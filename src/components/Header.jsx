import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          Creto Works
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#services">서비스 소개</a></li>
            <li><a href="#cases">고객 사례</a></li>
            <li><a href="#process">도입 절차</a></li>
          </ul>
        </nav>
        <div className="header-actions">
           <a href="#contact" className="btn btn-primary">문의하기</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
