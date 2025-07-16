import React from 'react';
import AnimatedNavbar from './AnimatedNavbar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import CallToActionSection from './CallToActionSection';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <AnimatedNavbar />
      <HeroSection />
      <AboutSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default LandingPage;