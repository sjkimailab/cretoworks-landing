import React from 'react';
import Hero from '../components/Hero';
import BrandPhilosophy from '../components/BrandPhilosophy';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import ContactCTA from '../components/ContactCTA';

const Home = () => {
    return (
        <>
            <Hero />
            <BrandPhilosophy />
            <Services />
            <CaseStudies />
            <Process />
            <FAQ />
            <ContactCTA />
        </>
    );
};

export default Home;
