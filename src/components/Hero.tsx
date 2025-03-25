
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white/80"></div>
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={cn(
            "opacity-0",
            isVisible && "animate-fade-down"
          )}>
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
              Welcome to My Portfolio
            </span>
          </div>
          
          <h1 className={cn(
            "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 text-balance",
            isVisible && "animate-fade-up animate-delay-200"
          )}>
            Crafting <span className="text-gradient">Digital Experiences</span> That Stand Out
          </h1>
          
          <p className={cn(
            "text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto opacity-0 text-balance",
            isVisible && "animate-fade-up animate-delay-400"
          )}>
            Your online presence matters. Discover why having a professional website is essential in today's digital landscape.
          </p>
          
          <div className={cn(
            "flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0",
            isVisible && "animate-fade-up animate-delay-600"
          )}>
            <a
              href="#why"
              className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              Discover Why
            </a>
            <a
              href="#portfolio"
              className="px-6 py-3 rounded-lg glass-dark text-foreground font-medium hover:bg-white/30 transition-colors"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <a href="#why" className="flex flex-col items-center text-foreground/70 hover:text-primary transition-colors">
          <span className="text-sm font-medium mb-2">Scroll Down</span>
          <ChevronDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
