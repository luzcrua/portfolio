
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { 
  Briefcase, 
  Instagram, 
  Github, 
  Linkedin, 
  Twitter, 
  Youtube,
  Plus,
  Check,
  ExternalLink
} from "lucide-react";

interface LinkItemProps {
  platform: string;
  icon: React.ReactNode;
  placeholder: string;
  delay: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ platform, icon, placeholder, delay }) => {
  const [url, setUrl] = useState("");
  const [isEditing, setIsEditing] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    if (url) {
      setIsEditing(false);
      setIsSaved(true);
      
      setTimeout(() => {
        setIsSaved(false);
      }, 2000);
    }
  };

  return (
    <div className={cn(
      "glass p-5 rounded-xl transition-all duration-300",
      "hover:shadow-lg hover:-translate-y-1",
      `animate-fade-up ${delay}`
    )}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
          <h3 className="font-medium">{platform}</h3>
        </div>
        
        {!isEditing && url && (
          <a 
            href={url.startsWith('http') ? url : `https://${url}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        )}
      </div>
      
      {isEditing ? (
        <div className="flex gap-2">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder={placeholder}
            className="flex-1 px-3 py-2 rounded-lg bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button
            onClick={handleSave}
            className="p-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
            disabled={!url}
          >
            <Check className="h-5 w-5" />
          </button>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <span className="text-foreground/80 truncate max-w-[180px]">
            {url}
          </span>
          <button
            onClick={() => setIsEditing(true)}
            className="text-xs text-primary hover:text-primary/80 transition-colors"
          >
            Edit
          </button>
        </div>
      )}
      
      {isSaved && (
        <div className="mt-2 text-sm text-green-600 flex items-center gap-1">
          <Check className="h-3 w-3" /> Saved
        </div>
      )}
    </div>
  );
};

const SocialLinks: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [links, setLinks] = useState([
    { platform: "Portfolio", icon: <Briefcase className="h-5 w-5" />, placeholder: "yourportfolio.com" },
    { platform: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, placeholder: "linkedin.com/in/username" },
    { platform: "GitHub", icon: <Github className="h-5 w-5" />, placeholder: "github.com/username" },
    { platform: "Instagram", icon: <Instagram className="h-5 w-5" />, placeholder: "instagram.com/username" },
    { platform: "Twitter", icon: <Twitter className="h-5 w-5" />, placeholder: "twitter.com/username" },
    { platform: "YouTube", icon: <Youtube className="h-5 w-5" />, placeholder: "youtube.com/c/channel" },
  ]);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container mx-auto max-w-6xl">
        <div 
          ref={ref}
          className={cn(
            "text-center mb-16 max-w-3xl mx-auto",
            inView ? "animate-fade-up" : "opacity-0"
          )}
        >
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            Portfolio Links
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Connect With My <span className="text-gradient">Work</span>
          </h2>
          <p className="text-lg text-foreground/80 mb-8 text-balance">
            Add links to your portfolio and social media platforms to showcase your work and connect with your audience.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link, index) => (
            <LinkItem
              key={index}
              platform={link.platform}
              icon={link.icon}
              placeholder={link.placeholder}
              delay={`animate-delay-${(index % 6) * 100}`}
            />
          ))}
          
          {/* Add custom link option */}
          <div className={cn(
            "glass p-5 rounded-xl flex flex-col items-center justify-center text-center min-h-[146px]",
            "cursor-pointer hover:bg-primary/5 transition-all",
            "border-2 border-dashed border-primary/20 hover:border-primary/40",
            "animate-fade-up animate-delay-600"
          )}>
            <div className="p-2 rounded-full bg-primary/10 text-primary mb-3">
              <Plus className="h-5 w-5" />
            </div>
            <p className="text-sm text-foreground/70">Add Custom Link</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
