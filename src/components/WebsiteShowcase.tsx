
import React from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "@/i18n/translations";
import { Monitor } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// Exemplos de sites que podem ser substituídos pelo usuário
const demoWebsites = [
  {
    image: "/sitemultilingue.png",
    title: "Landing Page",
    description: "Página de conversão para produto digital para 6 idiomas",
  },
  {
    image: "/neurofit.png",
    title: "Nicho Fitness",
    description: "Site para treinamento fitness que integra o corpo e mente",
  },
  {
    image: "/cconecte-svg.png",
    title: "Blog Corporativo",
    description: "Blog para empresa com design personalizado",
  },
  {
    image: "/sitequiz.png",
    title: "Site Quiz",
    description: "Quiz Fitness para corredores com objetivo de conversão",
  },
  {
    image: "/saas dentista.png",
    title: "SaaS para Dentistas",
    description: "Sistema que ajuda pacientes e conecta a profissionais",
  },
];

const WebsiteShowcase: React.FC = () => {
  const { language } = useTheme();
  const { t } = useTranslation(language);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="showcase"
      ref={ref}
      className="py-20 px-6 md:px-8 lg:px-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <h2 className={cn(
          "text-4xl md:text-5xl font-bold text-center transition-opacity duration-700",
          inView ? "opacity-100" : "opacity-0"
        )}>
          <span className="text-gradient">
            {language === "en" 
              ? "Website Showcase" 
              : language === "es" 
                ? "Muestra de Sitios Web" 
                : "Portfólio de Sites"}
          </span>
        </h2>

        <p className={cn(
          "text-xl text-muted-foreground text-center max-w-2xl mx-auto mt-6 mb-12 transition-opacity duration-700 delay-100",
          inView ? "opacity-100" : "opacity-0"
        )}>
          {language === "en" 
            ? "Some examples of websites I've built for my clients" 
            : language === "es" 
              ? "Algunos ejemplos de sitios web que he construido para mis clientes" 
              : "Alguns exemplos de sites que desenvolvi para meus clientes"}
        </p>

        <div className={cn(
          "transition-opacity duration-1000 delay-200",
          inView ? "opacity-100" : "opacity-0"
        )}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              containScroll: "trimSnaps",
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {demoWebsites.map((site, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full p-1">
                    <Card className="overflow-hidden border border-border h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                      <div className="aspect-video relative overflow-hidden bg-muted">
                        <img
                          src={site.image}
                          alt={site.title}
                          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                          <div className="bg-primary/10 p-3 rounded-full">
                            <Monitor className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-1">{site.title}</h3>
                        <p className="text-sm text-muted-foreground">{site.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static -left-0 mr-2" />
              <CarouselNext className="relative static -right-0 ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default WebsiteShowcase;
