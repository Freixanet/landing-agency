import React from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { BentoGrid } from './components/BentoGrid';
import { Comparison } from './components/Comparison';
import { Steps } from './components/Steps';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <BackgroundEffects />
      <Navbar />
      
      <main>
        <Hero />
        <SocialProof />
        <BentoGrid />
        <Comparison />
        <Steps />
        <Pricing />
      </main>

      <Footer />
    </>
  );
};

export default App;