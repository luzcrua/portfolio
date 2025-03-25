
import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { 
  Globe, 
  Users, 
  BarChart3, 
  ShieldCheck, 
  Clock
} from "lucide-react";

interface ReasonProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const Reason: React.FC<ReasonProps> = ({ icon, title, description, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const isEven = index % 2 === 0;
  const animationClass = isEven ? "animate-fade-right" : "animate-fade-left";
  const delayClass = `animate-delay-${(index % 5) * 200}`;

  return (
    <div 
      ref={ref}
      className={cn(
        "flex flex-col md:flex-row items-start gap-6 p-6 rounded-2xl glass transition-all duration-300",
        "hover:shadow-xl hover:-translate-y-1",
        inView ? animationClass + " " + delayClass : "opacity-0"
      )}
    >
      <div className="flex-shrink-0 p-4 rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-foreground/80 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const WhyWebsite: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const reasons = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Visibility",
      description: "A website gives you 24/7 global presence, allowing potential clients to discover your work from anywhere in the world. It expands your reach beyond geographic limitations."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Professional Credibility",
      description: "In today's digital world, a professional website is expected. It establishes trust and credibility with clients, showing you're serious about your work and business."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Marketing & Growth",
      description: "Your website serves as a powerful marketing tool that can adapt to your changing portfolio. It helps drive organic traffic through SEO and integrates with social media."
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Control Your Narrative",
      description: "Own your story and present your work exactly how you want it to be seen. A personal website gives you complete control over your brand and message."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Always Available",
      description: "Your website works for you around the clock, providing information, showcasing your portfolio, and even generating leads while you focus on your craft."
    }
  ];

  return (
    <section id="why" className="section-padding bg-gradient-to-b from-white to-blue-50/50">
      <div className="container mx-auto max-w-6xl">
        <div 
          ref={ref}
          className={cn(
            "text-center mb-16 max-w-3xl mx-auto",
            inView ? "animate-fade-up" : "opacity-0"
          )}
        >
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            Why It Matters
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            5 Reasons Why Having a Website is <span className="text-gradient">Essential</span>
          </h2>
          <p className="text-lg text-foreground/80 text-balance">
            In today's digital landscape, your online presence is more important than ever. 
            Here's why investing in a professional website is crucial for your success.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <Reason
              key={index}
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWebsite;
