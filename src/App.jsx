import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Partners from './components/Partners';
import BrandPhilosophy from './components/BrandPhilosophy';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import ContactCTA from './components/ContactCTA';
import './index.css';

function App() {
  return (
    <Layout>
      <Hero />
      <Partners />
      <BrandPhilosophy />
      <Services />
      <CaseStudies />
      <Process />
      <ContactCTA />
    </Layout>
  );
}

export default App;
