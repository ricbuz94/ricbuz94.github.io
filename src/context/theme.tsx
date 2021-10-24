import { createContext, useState } from "react";
import { getTheme, storeTheme } from "../helpers/localStorage";
import { light, dark } from "../themes/index";
import { ThemeProvider as Provider } from "styled-components";

export const CurrentThemeContext = createContext({
  setCurrentTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const t = getTheme();
    if (t === "dark") {
      return dark;
    }
    return light;
  });

  const setCurrentTheme = () => {
    setTheme(theme.name === "dark" ? light : dark);
    storeTheme(theme.name === "dark" ? "light" : "dark");
  };

  return (
    <CurrentThemeContext.Provider value={{ setCurrentTheme }}>
      <Provider theme={theme}>{children}</Provider>
    </CurrentThemeContext.Provider>
  );
};

export { ThemeProvider };
