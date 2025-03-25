
import React from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "@/i18n/translations";
import { Mail, ArrowRight } from "lucide-react";

const ContactLink: React.FC = () => {
  const { language } = useTheme();
  const { t } = useTranslation(language);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Você pode mudar o link do contato aqui
  const contactLink = "#";

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-6 md:px-8 lg:px-12 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className={cn(
          "bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-2xl p-8 md:p-16 text-center relative overflow-hidden border border-primary/20 shadow-lg transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          {/* Elementos decorativos */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-primary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/20 text-primary">
              <Mail className="h-8 w-8" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">
                {language === "en" 
                  ? "Ready to Get Started?" 
                  : language === "es" 
                    ? "¿Listo para Comenzar?" 
                    : "Pronto para Começar?"}
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              {language === "en" 
                ? "Let's discuss your project and transform your digital presence together." 
                : language === "es" 
                  ? "Vamos a discutir tu proyecto y transformar juntos tu presencia digital." 
                  : "Vamos discutir seu projeto e transformar juntos sua presença digital."}
            </p>
            
            <a 
              href={contactLink} 
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-300 group"
            >
              {language === "en" 
                ? "Contact Me" 
                : language === "es" 
                  ? "Contáctame" 
                  : "Entre em Contato"}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLink;
