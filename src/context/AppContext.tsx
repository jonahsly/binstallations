import React, { createContext, useContext, useState } from 'react';

type AppContextValue = {
  selectedCourse: string;
  setSelectedCourse: React.Dispatch<React.SetStateAction<string>>;
  selectedTheme: string;
  setSelectedTheme: React.Dispatch<React.SetStateAction<string>>;
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
};

const AppContext = createContext<AppContextValue | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedCourse, setSelectedCourse] = useState('sanitaria');
  const [selectedTheme, setSelectedTheme] = useState('tema1');
  const [language, setLanguage] = useState('es');

  return (
    <AppContext.Provider
      value={{
        selectedCourse,
        setSelectedCourse,
        selectedTheme,
        setSelectedTheme,
        language,
        setLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextValue => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};

