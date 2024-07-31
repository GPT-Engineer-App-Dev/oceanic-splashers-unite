import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center text-white">
      <img src="/placeholder.svg" alt="Open sea swimming" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Open Sea Swimmers Club</h1>
        <p className="text-xl mb-8">Embrace the waves, challenge yourself</p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Join Us</Button>
      </div>
    </section>
  );
};

export default HeroSection;