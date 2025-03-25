
export const translations = {
  "pt-BR": {
    "home": "Início",
    "why": "Por Que",
    "portfolio": "Portfólio",
    "contact": "Contato",
    "hero": {
      "title": "Design Futurista para o Seu Sucesso",
      "subtitle": "Transforme sua presença online com um portfólio que impressiona",
      "cta": "Conheça Mais"
    },
    "why": {
      "title": "Por Que Ter um Site?",
      "sections": [
        {
          "title": "Visibilidade Global",
          "description": "Um site permite que seu trabalho seja visto por pessoas em todo o mundo, expandindo seu alcance muito além das limitações geográficas."
        },
        {
          "title": "Credibilidade Profissional",
          "description": "Um site bem projetado estabelece confiança e credibilidade, demonstrando profissionalismo e compromisso com sua marca."
        },
        {
          "title": "Disponibilidade 24/7",
          "description": "Seu portfólio online trabalha para você 24 horas por dia, permitindo que potenciais clientes conheçam seu trabalho a qualquer momento."
        },
        {
          "title": "Centralização do Trabalho",
          "description": "Um site próprio oferece um local centralizado para exibir todos os seus projetos e conquistas em um único lugar de fácil acesso."
        },
        {
          "title": "Controle Total",
          "description": "Ao contrário das redes sociais, seu site oferece controle completo sobre a apresentação e organização do seu conteúdo e marca pessoal."
        }
      ]
    },
    "socialLinks": {
      "title": "Meus Links",
      "description": "Conecte-se comigo através das minhas redes e plataformas"
    },
    "footer": {
      "rights": "Todos os direitos reservados",
      "madeWith": "Feito com"
    },
    "theme": "Tema",
    "language": "Idioma"
  },
  "en": {
    "home": "Home",
    "why": "Why",
    "portfolio": "Portfolio",
    "contact": "Contact",
    "hero": {
      "title": "Futuristic Design for Your Success",
      "subtitle": "Transform your online presence with a portfolio that impresses",
      "cta": "Learn More"
    },
    "why": {
      "title": "Why Have a Website?",
      "sections": [
        {
          "title": "Global Visibility",
          "description": "A website allows your work to be seen by people all over the world, expanding your reach far beyond geographical limitations."
        },
        {
          "title": "Professional Credibility",
          "description": "A well-designed website establishes trust and credibility, demonstrating professionalism and commitment to your brand."
        },
        {
          "title": "24/7 Availability",
          "description": "Your online portfolio works for you 24 hours a day, allowing potential clients to see your work at any time."
        },
        {
          "title": "Work Centralization",
          "description": "Your own website offers a centralized location to display all your projects and achievements in one easily accessible place."
        },
        {
          "title": "Total Control",
          "description": "Unlike social media, your website gives you complete control over the presentation and organization of your content and personal brand."
        }
      ]
    },
    "socialLinks": {
      "title": "My Links",
      "description": "Connect with me through my networks and platforms"
    },
    "footer": {
      "rights": "All rights reserved",
      "madeWith": "Made with"
    },
    "theme": "Theme",
    "language": "Language"
  },
  "es": {
    "home": "Inicio",
    "why": "Por Qué",
    "portfolio": "Portafolio",
    "contact": "Contacto",
    "hero": {
      "title": "Diseño Futurista para Tu Éxito",
      "subtitle": "Transforma tu presencia en línea con un portafolio que impresiona",
      "cta": "Conozca Más"
    },
    "why": {
      "title": "¿Por Qué Tener un Sitio Web?",
      "sections": [
        {
          "title": "Visibilidad Global",
          "description": "Un sitio web permite que tu trabajo sea visto por personas en todo el mundo, expandiendo tu alcance mucho más allá de las limitaciones geográficas."
        },
        {
          "title": "Credibilidad Profesional",
          "description": "Un sitio web bien diseñado establece confianza y credibilidad, demostrando profesionalismo y compromiso con tu marca."
        },
        {
          "title": "Disponibilidad 24/7",
          "description": "Tu portafolio en línea trabaja para ti las 24 horas del día, permitiendo que potenciales clientes conozcan tu trabajo en cualquier momento."
        },
        {
          "title": "Centralización del Trabajo",
          "description": "Un sitio web propio ofrece un lugar centralizado para mostrar todos tus proyectos y logros en un solo lugar de fácil acceso."
        },
        {
          "title": "Control Total",
          "description": "A diferencia de las redes sociales, tu sitio web ofrece control completo sobre la presentación y organización de tu contenido y marca personal."
        }
      ]
    },
    "socialLinks": {
      "title": "Mis Enlaces",
      "description": "Conéctate conmigo a través de mis redes y plataformas"
    },
    "footer": {
      "rights": "Todos los derechos reservados",
      "madeWith": "Hecho con"
    },
    "theme": "Tema",
    "language": "Idioma"
  }
};

// Define a type for our translations structure
type TranslationType = {
  home: string;
  why: {
    title: string;
    sections: Array<{
      title: string;
      description: string;
    }>;
  };
  portfolio: string;
  contact: string;
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  socialLinks: {
    title: string;
    description: string;
  };
  footer: {
    rights: string;
    madeWith: string;
  };
  theme: string;
  language: string;
};

type TranslationsType = {
  [key: string]: TranslationType;
};

// Hook to get translations based on current language
export function useTranslation(language: string) {
  const t = (key: string) => {
    // Allow accessing nested keys like "hero.title"
    const keys = key.split('.');
    const langObj = translations[language as keyof typeof translations] as any;
    
    if (!langObj) {
      console.warn(`Language "${language}" not found`);
      return key;
    }
    
    let value: any = langObj;
    
    // Navigate through the nested keys
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Return the key if translation not found
        console.warn(`Translation key "${key}" not found for language "${language}"`);
        return key;
      }
    }
    
    return value;
  };

  return { t };
}
