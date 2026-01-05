import React, { Component, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
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
import './index.css';

// Admin imports
import AdminLogin from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import Inquiries from './pages/admin/Inquiries';
import AdminLayout from './components/admin/AdminLayout';
import ProtectedRoute from './components/admin/ProtectedRoute';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'red', background: '#fff' }}>
          <h1>Something went wrong.</h1>
          <pre>{this.state.error?.toString()}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

// Landing Page Component to keep App clean
const LandingPage = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = React.useState(false);
  const togglePrivacyModal = () => setIsPrivacyOpen(!isPrivacyOpen);

  return (
    <>
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
    </>
  );
};

function App() {
  console.log("App component rendering...");

  return (
    <ErrorBoundary>
      <Suspense fallback={<div className="loading-state">Loading...</div>}>
        <Routes>
          {/* Public Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/*" element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="inquiries" element={<Inquiries />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
