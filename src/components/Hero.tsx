
import React from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "@/i18n/translations";

const Hero: React.FC = () => {
  const { language } = useTheme();
  const { t } = useTranslation(language);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative section-padding overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent z-10"></div>
      
      <div className="relative z-20 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance animate-fade-up mb-6">
          <span className="text-gradient">{t("hero.title")}</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground animate-fade-up animate-delay-200 mb-8 max-w-2xl mx-auto">
          {t("hero.subtitle")}
        </p>
        <div className="animate-fade-up animate-delay-300">
          <Button size="lg" className="rounded-full text-lg px-8" asChild>
            <a href="#why">{t("hero.cta")}</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
