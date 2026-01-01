import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import CookieConsent from './components/CookieConsent';
import PrivacyModal from './components/PrivacyModal';
import ErrorBoundary from './components/common/ErrorBoundary';
import './index.css';

function App() {
  console.log("App component rendering...");
  const [isPrivacyOpen, setIsPrivacyOpen] = React.useState(false);

  const togglePrivacyModal = () => setIsPrivacyOpen(!isPrivacyOpen);

  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-navy-950 text-white">Loading...</div>}>
          <Layout onPrivacyClick={togglePrivacyModal}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
          <CookieConsent onPrivacyClick={togglePrivacyModal} />
          <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
