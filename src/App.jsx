import React, { Component } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Partners from './components/Partners';
import BrandPhilosophy from './components/BrandPhilosophy';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import FAQ from './components/FAQ';
import ContactCTA from './components/ContactCTA';
import './index.css';

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

function App() {
  console.log("App component rendering...");
  return (
    <ErrorBoundary>
      <Layout>
        <Hero />
        <Partners />
        <BrandPhilosophy />
        <Services />
        <CaseStudies />
        <Process />
        <FAQ />
        <ContactCTA />
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
