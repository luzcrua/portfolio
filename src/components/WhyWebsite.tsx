
import React from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "@/i18n/translations";

const WhyWebsite: React.FC = () => {
  const { language } = useTheme();
  const { t } = useTranslation(language);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="why"
      ref={ref}
      className="py-20 px-6 md:px-8 lg:px-12 relative"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className={cn(
          "text-4xl md:text-5xl font-bold text-center mb-16 transition-opacity duration-700",
          inView ? "opacity-100" : "opacity-0"
        )}>
          <span className="text-gradient">{t("why.title")}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t("why.sections").map((section: any, index: number) => (
            <div
              key={index}
              className={cn(
                "bg-card rounded-xl p-8 shadow-lg border border-border transition-all duration-500 hover:shadow-xl hover:-translate-y-1",
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
              <h3 className="text-2xl font-bold mb-4 text-gradient">
                {section.title}
              </h3>
              <p className="text-muted-foreground">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWebsite;
