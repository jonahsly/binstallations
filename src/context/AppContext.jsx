import React from 'react';
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
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

export const useAppContext = () => useContext(AppContext);
