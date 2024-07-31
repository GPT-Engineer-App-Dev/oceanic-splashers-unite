import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Open Sea Swimmers Club</div>
        <nav>
          <ul className="flex space-x-4">
            {['Home', 'About', 'Events', 'Gallery', 'Contact'].map((item) => (
              <li key={item}>
                <Button variant="ghost" className="text-white hover:text-blue-200">
                  {item}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;