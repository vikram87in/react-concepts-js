import { createContext, useState } from 'react';

// named export
export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const propsObj = { theme, setTheme };

  return (
    <ThemeContext.Provider value={propsObj}>
      {children}
    </ThemeContext.Provider>
  );
}

// default export
export default ThemeProvider;