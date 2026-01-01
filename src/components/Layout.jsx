import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, onPrivacyClick }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer onPrivacyClick={onPrivacyClick} />
    </div>
  );
};

export default Layout;
