import React from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutFeatures from '../components/about/AboutFeatures';
import AboutTeam from '../components/about/AboutTeam';
import AboutVisionBoard from '../components/about/AboutVisionBoard';
import AboutScrollingRibbon from '../components/about/AboutScrollingRibbon';
import AboutTechStack from '../components/about/AboutTechStack';
import AboutContact from '../components/about/AboutContact';
import AboutMobileDesign from '../components/about/AboutMobileDesign';

const AboutUs = () => {
  return (
    <div className="about-page-container">
      <AboutHero />
      <AboutFeatures />
      <AboutTeam />
      <AboutVisionBoard />
      <AboutMobileDesign />
      <AboutScrollingRibbon />
      <AboutTechStack />
      <AboutContact />
    </div>
  );
};

export default AboutUs;
