import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-blue-200">
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-blue-200">
            <Instagram size={24} />
          </a>
          <a href="#" className="hover:text-blue-200">
            <Twitter size={24} />
          </a>
        </div>
        <div className="text-center">
          <p>&copy; 2024 Open Sea Swimmers Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;