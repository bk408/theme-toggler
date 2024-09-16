import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";

const themes = {
  dark: {
    backgroundColor: "black",
    color: "white",
  },

  light: {
    backgroundColor: "white",
    color: "black",
  },
};

const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {},
};

const ThemeContext = createContext(initialState);

// eslint-disable-next-line react/prop-types
function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false); // default theme is light

  // on mount, read the preferred theme from the persistence
  useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";
    setDark(isDark);
  }, [dark]);

  // toggle between light and dark modes

  const toggle = () => {
    const isDark = !dark; // means if dark then it become light and same with other
    localStorage.setItem("dark", JSON.stringify(isDark));
    setDark(isDark);
  };

  // filter the styles based on the theme selected

  const theme = dark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
