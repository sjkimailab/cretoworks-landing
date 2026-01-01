import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          CretoWorks
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#services">Service</a></li>
            <li><a href="#ai-store">AI Store</a></li>
            <li><a href="#custom-ai">custom ai</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <a href="#contact" className="btn btn-outline btn-sm">문의하기</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
