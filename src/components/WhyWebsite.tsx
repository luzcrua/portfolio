
import React from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "@/i18n/translations";
import { Lightbulb, Globe, Clock, Layers, Lock, Award, Target, Zap } from "lucide-react";

const WhyWebsite: React.FC = () => {
  const { language } = useTheme();
  const { t } = useTranslation(language);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Get the sections array from translations
  const whySections = t("whySection.sections");
  const whyTitle = t("whySection.title");

  // Icons for each section
  const sectionIcons = [
    <Globe className="h-8 w-8" />,
    <Award className="h-8 w-8" />,
    <Clock className="h-8 w-8" />,
    <Layers className="h-8 w-8" />,
    <Lock className="h-8 w-8" />,
    <Lightbulb className="h-8 w-8" />,
    <Target className="h-8 w-8" />,
    <Zap className="h-8 w-8" />
  ];

  return (
    <section
      id="why"
      ref={ref}
      className="py-20 px-6 md:px-8 lg:px-12 relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -inset-[10px] bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-4xl md:text-5xl font-bold mb-6 transition-opacity duration-700",
            inView ? "opacity-100" : "opacity-0"
          )}>
            <span className="text-gradient">{whyTitle}</span>
          </h2>
          
          <p className={cn(
            "text-xl text-muted-foreground max-w-3xl mx-auto transition-opacity duration-700 delay-100",
            inView ? "opacity-100" : "opacity-0"
          )}>
            {language === "en" 
              ? "Discover the advantages of having your own professional website in today's digital world."
              : language === "es"
                ? "Descubra las ventajas de tener su propio sitio web profesional en el mundo digital actual."
                : "Descubra as vantagens de ter seu próprio site profissional no mundo digital de hoje."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.isArray(whySections) && whySections.map((section, index) => (
            <div
              key={index}
              className={cn(
                "group bg-card rounded-xl p-8 shadow-lg border border-border transition-all duration-500 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden",
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10",
                {
                  "transition-delay-100": index % 4 === 0,
                  "transition-delay-200": index % 4 === 1,
                  "transition-delay-300": index % 4 === 2,
                  "transition-delay-400": index % 4 === 3,
                }
              )}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Icon container */}
              <div className="bg-primary/10 p-4 rounded-lg inline-flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {index < sectionIcons.length ? sectionIcons[index] : <Lightbulb className="h-8 w-8" />}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {section.title}
              </h3>
              
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {section.description}
              </p>
            </div>
          ))}
          
          {/* Additional sections */}
          <div
            className={cn(
              "group bg-card rounded-xl p-8 shadow-lg border border-border transition-all duration-500 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden",
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10",
              "transition-delay-500"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="bg-primary/10 p-4 rounded-lg inline-flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              <Lightbulb className="h-8 w-8" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
              {language === "en" 
                ? "Search Engine Visibility" 
                : language === "es" 
                  ? "Visibilidad en Buscadores" 
                  : "Visibilidade em Buscadores"}
            </h3>
            
            <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              {language === "en"
                ? "A well-optimized website helps you rank higher in search engines, making it easier for potential clients to find you."
                : language === "es"
                  ? "Un sitio web bien optimizado te ayuda a posicionarte mejor en los motores de búsqueda, facilitando que clientes potenciales te encuentren."
                  : "Um site bem otimizado ajuda você a se posicionar melhor nos mecanismos de busca, facilitando que clientes potenciais te encontrem."}
            </p>
          </div>
          
          <div
            className={cn(
              "group bg-card rounded-xl p-8 shadow-lg border border-border transition-all duration-500 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden",
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10",
              "transition-delay-600"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="bg-primary/10 p-4 rounded-lg inline-flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              <Target className="h-8 w-8" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
              {language === "en" 
                ? "Target Audience Reach" 
                : language === "es" 
                  ? "Alcance a Público Objetivo" 
                  : "Alcance ao Público-Alvo"}
            </h3>
            
            <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              {language === "en"
                ? "Tailor your website content to appeal directly to your ideal clients, increasing conversion rates and engagement."
                : language === "es"
                  ? "Adapta el contenido de tu sitio web para atraer directamente a tus clientes ideales, aumentando las tasas de conversión y engagement."
                  : "Adapte o conteúdo do seu site para atrair diretamente seus clientes ideais, aumentando as taxas de conversão e engajamento."}
            </p>
          </div>
          
          <div
            className={cn(
              "group bg-card rounded-xl p-8 shadow-lg border border-border transition-all duration-500 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden",
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10",
              "transition-delay-700"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="bg-primary/10 p-4 rounded-lg inline-flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              <Zap className="h-8 w-8" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
              {language === "en" 
                ? "Competitive Advantage" 
                : language === "es" 
                  ? "Ventaja Competitiva" 
                  : "Vantagem Competitiva"}
            </h3>
            
            <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              {language === "en"
                ? "Stand out from competitors who don't have a professional online presence, establishing yourself as a leader in your field."
                : language === "es"
                  ? "Destácate entre competidores que no tienen una presencia en línea profesional, estableciéndote como líder en tu campo."
                  : "Destaque-se entre concorrentes que não possuem uma presença online profissional, estabelecendo-se como líder em seu campo."}
            </p>
          </div>
        </div>
        
        {/* Call to action */}
        <div className={cn(
          "mt-16 text-center transition-opacity duration-700 delay-800",
          inView ? "opacity-100" : "opacity-0"
        )}>
          <p className="text-xl text-primary font-medium mb-4">
            {language === "en" 
              ? "Ready to elevate your online presence?" 
              : language === "es" 
                ? "¿Listo para elevar tu presencia en línea?" 
                : "Pronto para elevar sua presença online?"}
          </p>
          <a 
            href="#portfolio" 
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-300"
          >
            {language === "en" 
              ? "Get Started Today" 
              : language === "es" 
                ? "Comienza Hoy" 
                : "Comece Hoje"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyWebsite;
