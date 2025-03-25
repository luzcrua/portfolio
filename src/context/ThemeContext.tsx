
import React, { createContext, useState, useContext, useEffect } from "react";

type Theme = "light" | "dark";
type Language = "pt-BR" | "en" | "es";

interface ThemeContextType {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  setLanguage: (lang: Language) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Tenta recuperar o tema do localStorage, ou usa o preferido do sistema, ou padrão light
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) return savedTheme;
    
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    
    return "light";
  });

  const [language, setLanguage] = useState<Language>(() => {
    // Tenta recuperar o idioma do localStorage, ou padrão pt-BR
    const savedLanguage = localStorage.getItem("language") as Language;
    return savedLanguage || "pt-BR";
  });

  // Atualiza o tema no localStorage e aplica a classe CSS quando o tema mudar
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  // Atualiza o idioma no localStorage quando mudar
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Função para alternar entre temas
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Objeto de contexto com valores e funções
  const contextValue: ThemeContextType = {
    theme,
    language,
    toggleTheme,
    setLanguage,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para facilitar o uso do contexto
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
  }
  return context;
};
