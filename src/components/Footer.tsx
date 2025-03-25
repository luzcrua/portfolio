
import React from "react";
import { Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gradient-to-t from-blue-50/70 to-white py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gradient">Portfolio</h3>
            <p className="text-foreground/70 max-w-xs">
              A showcase of my professional work and skills, designed to make a lasting impression.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-foreground/70 hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#why" className="text-foreground/70 hover:text-primary transition-colors">Why a Website</a>
              </li>
              <li>
                <a href="#portfolio" className="text-foreground/70 hover:text-primary transition-colors">Portfolio Links</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-foreground/70">
                <span className="font-medium text-foreground">Email:</span> your.email@example.com
              </li>
              <li className="text-foreground/70">
                <span className="font-medium text-foreground">Location:</span> City, Country
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-foreground/70 mb-4">
              Subscribe to receive updates about my latest work.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-l-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button className="px-4 py-2 bg-primary text-white rounded-r-lg hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/70 text-sm mb-4 md:mb-0">
            © {currentYear} Your Portfolio. All rights reserved.
          </p>
          
          <p className="text-foreground/70 text-sm flex items-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" fill="currentColor" /> using modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
