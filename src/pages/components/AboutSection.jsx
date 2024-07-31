import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-wrap items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">About Our Club</h2>
          <p className="text-gray-700">
            The Open Sea Swimmers Club is a community of passionate individuals who love the thrill and challenge of open water swimming. 
            We organize regular swims, training sessions, and events for swimmers of all levels. 
            Join us to experience the freedom of the open sea and push your limits in a safe and supportive environment.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img src="/placeholder.svg" alt="Club members swimming" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;