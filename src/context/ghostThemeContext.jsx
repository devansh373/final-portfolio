import { createContext, useContext, useState } from "react";

const ghostThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [ghostTheme, setGhostTheme] = useState(false);
  const toggleGhostTheme = () => {
    setGhostTheme((prev) => !prev);
  };
  return (
    <ghostThemeContext.Provider value={{ ghostTheme, toggleGhostTheme }}>
      {children}
    </ghostThemeContext.Provider>
  );
};

export const useGhostThemeContext = () => {
  const context = useContext(ghostThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
