import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, onPrivacyClick }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer onPrivacyClick={onPrivacyClick} />
    </div>
  );
};

export default Layout;
