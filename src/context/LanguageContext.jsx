import React, { createContext, useState, useContext } from "react";
import en from "../translations/en.json";
import es from "../translations/es.json";
//import ar from "../translations/ar.json";

const languages = { en, es  };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  const t = (key) => languages[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
