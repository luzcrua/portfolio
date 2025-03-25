
import React from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Instagram, Globe } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "@/i18n/translations";

// Esta lista é um exemplo e deve ser personalizada pelo usuário
const demoLinks = [
  { icon: <Github />, label: "Github", url: "#" },
  { icon: <Twitter />, label: "Twitter", url: "#" },
  { icon: <Linkedin />, label: "LinkedIn", url: "#" },
  { icon: <Instagram />, label: "Instagram", url: "#" },
  { icon: <Globe />, label: "Website", url: "#" },
];

const SocialLinks: React.FC = () => {
  const { language } = useTheme();
  const { t } = useTranslation(language);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="portfolio"
      ref={ref}
      className="py-20 px-6 md:px-8 lg:px-12 relative"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className={cn(
          "text-4xl md:text-5xl font-bold text-center transition-opacity duration-700",
          inView ? "opacity-100" : "opacity-0"
        )}>
          <span className="text-gradient">{t("socialLinks.title")}</span>
        </h2>

        <p className={cn(
          "text-xl text-muted-foreground text-center max-w-2xl mx-auto mt-6 mb-12 transition-opacity duration-700 delay-100",
          inView ? "opacity-100" : "opacity-0"
        )}>
          {t("socialLinks.description")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group",
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10",
                {
                  "transition-delay-100": index % 3 === 0,
                  "transition-delay-200": index % 3 === 1,
                  "transition-delay-300": index % 3 === 2,
                }
              )}
            >
              <div className="bg-card h-full rounded-xl p-8 border border-border shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center justify-center gap-4 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
                <h3 className="text-2xl font-bold">{link.label}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
