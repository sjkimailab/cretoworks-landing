import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AdminLogin from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import Inquiries from './pages/admin/Inquiries';
import ProtectedRoute from './components/admin/ProtectedRoute';
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
          <Routes>
            {/* Public routes */}
            <Route path="/" element={
              <Layout onPrivacyClick={togglePrivacyModal}>
                <Home />
              </Layout>
            } />
            <Route path="/contact" element={
              <Layout onPrivacyClick={togglePrivacyModal}>
                <Contact />
              </Layout>
            } />

            {/* Admin routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/inquiries" element={
              <ProtectedRoute>
                <Inquiries />
              </ProtectedRoute>
            } />
          </Routes>
          <CookieConsent onPrivacyClick={togglePrivacyModal} />
          <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
