// src/contexts/StyleContext.jsx

import { createContext, useContext, useState } from 'react';

const StyleContext = createContext();

export function StyleProvider({ children }) {
  const [styles, setStyles] = useState({
    fontFamily: 'Dancing Script',
    background: 'linear-gradient(to right, #ff758c, #ff7eb3)',
    fontColor: '#ffffff',
    animation: 'none'
  });

  const updateStyles = (newStyles) => {
    setStyles(prev => ({ ...prev, ...newStyles }));
  };

  return (
    <StyleContext.Provider value={{ styles, updateStyles }}>
      {children}
    </StyleContext.Provider>
  );
}

export const useStyles = () => useContext(StyleContext);