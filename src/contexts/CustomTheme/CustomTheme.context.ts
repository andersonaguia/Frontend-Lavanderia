import { createContext } from "react";
import { CustomThemeInterfaces } from "./CustomTheme.interfaces";

export const CustomThemeContext = createContext<CustomThemeInterfaces>({
  theme: "dark",
  handleTheme: () => Promise.resolve(),
});