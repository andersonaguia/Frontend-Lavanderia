import { useContext } from "react";
import { CustomThemeContext } from "./CustomTheme.context";

export const useCustomTheme = () => {
  return useContext(CustomThemeContext);
};