import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;