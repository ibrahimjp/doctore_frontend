// File: src/App.jsx

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Faq from './components/Faq';
import Cta from './components/Cta';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <HowItWorks />
        <Services />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default App;