
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyWebsite from "@/components/WhyWebsite";
import SocialLinks from "@/components/SocialLinks";
import WebsiteShowcase from "@/components/WebsiteShowcase";
import ContactLink from "@/components/ContactLink";
import Footer from "@/components/Footer";
import { useTheme } from "@/context/ThemeContext";

const Index: React.FC = () => {
  const { language } = useTheme();
  
  // Smooth scroll implementation for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            window.scrollTo({
              behavior: 'smooth',
              top: element.getBoundingClientRect().top + window.scrollY - 100
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <WhyWebsite />
        <WebsiteShowcase />
        <SocialLinks />
        <ContactLink />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
