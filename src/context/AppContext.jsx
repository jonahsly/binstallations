import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState('option1');

  return (
    <AppContext.Provider value={{ selectedOption, setSelectedOption }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
