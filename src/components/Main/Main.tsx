import { ReactNode } from "react";
import { MainStyled } from "./Main.styles";

interface MainProps {
  children: ReactNode;
}

export const Main: React.FC<MainProps> = ({ children }) => {
  return <MainStyled>{children}</MainStyled>;
};
