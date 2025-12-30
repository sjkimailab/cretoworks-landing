import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Partners from './components/Partners';
import CaseStudies from './components/CaseStudies';
import Services from './components/Services';
import Process from './components/Process';
import ContactCTA from './components/ContactCTA';
import './index.css';

function App() {
  return (
    <Layout>
      <Hero />
      <Partners />
      <CaseStudies />
      <Services />
      <Process />
      <ContactCTA />
    </Layout>
  );
}

export default App;
