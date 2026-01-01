import React, { Suspense } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import BrandPhilosophy from './components/BrandPhilosophy';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import FAQ from './components/FAQ';
import ContactCTA from './components/ContactCTA';
import CookieConsent from './components/CookieConsent';
import PrivacyModal from './components/PrivacyModal';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

function App() {
  console.log("App component rendering...");
  const [isPrivacyOpen, setIsPrivacyOpen] = React.useState(false);

  const togglePrivacyModal = () => setIsPrivacyOpen(!isPrivacyOpen);

  return (
    <ErrorBoundary>
      <Suspense fallback={<div className="loading-state">Loading...</div>}>
        <Layout onPrivacyClick={togglePrivacyModal}>
          <Hero />
          <BrandPhilosophy />
          <Services />
          <CaseStudies />
          <Process />
          <FAQ />
          <ContactCTA />
        </Layout>
        <CookieConsent onPrivacyClick={togglePrivacyModal} />
        <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
