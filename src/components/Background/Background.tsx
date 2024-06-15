import { ReactNode } from "react";
import { BackgroundStyled } from "./Background.styles";

interface BackgroundProps {
  children: ReactNode;
}

export const Background: React.FC<BackgroundProps> = ({ children }) => {
  return <BackgroundStyled>{children}</BackgroundStyled>;
};
