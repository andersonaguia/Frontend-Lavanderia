import { useEffect, useState } from "react";
import {
  CustomThemeInterfaces,
  CustomThemeProviderProps,
} from "./CustomTheme.interfaces";
import { CustomThemeContext } from "./CustomTheme.context";

export const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<string>(() => {
    const storedTheme = localStorage.getItem("THEME");
    return storedTheme ? JSON.parse(storedTheme) : "dark";
  });

  useEffect(() => {
    localStorage.setItem("THEME", JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    console.log("TEMA: ", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const customThemeContextValues: CustomThemeInterfaces = {
    theme,
    handleTheme,
  };

  return (
    <CustomThemeContext.Provider value={customThemeContextValues}>
      {children}
    </CustomThemeContext.Provider>
  );
};
