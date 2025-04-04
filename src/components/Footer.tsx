
import React from "react";
import { Heart } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "@/i18n/translations";
import { cn } from "@/lib/utils";

const Footer: React.FC = () => {
  const { language } = useTheme();
  const { t } = useTranslation(language);
  
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-8 px-6 md:px-8 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-gradient font-bold text-xl">Portfolio</span>
        </div>

        <div className="text-muted-foreground text-sm">
          &copy; {currentYear}. {t("footer.rights")}.
        </div>

        <div className="mt-4 md:mt-0 flex items-center gap-1 text-sm text-muted-foreground">
          <span>{t("footer.madeWith")}</span>
          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
        </div>
      </div>
      
      {/* Designer credit */}
      <div className="mt-6 text-center text-xs text-muted-foreground/70">
        Idealizado por <a 
          href="https://arinelson.space/contato" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors duration-300 underline underline-offset-2"
        >
          Arinelson Santos
        </a>
      </div>
    </footer>
  );
};

export default Footer;
