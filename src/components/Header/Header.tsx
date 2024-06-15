import {
  NavStyled,
  TitleStyled,
  LogoStyled,
  HeaderStyled,
  ButtonStyled,
  ContainerStyled,
} from "./Header.styles";
import logoSolar from "../../assets/img/solar.png";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import { useCustomTheme } from "../../contexts/CustomTheme/useCustomTheme";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../../contexts/Authentication/useAuthentication";
import { useEffect } from "react";

export const Header: React.FC = () => {
  const { theme, handleTheme } = useCustomTheme();
  const { handleLogout, isAuthenticated, userData } = useAuthentication();

  const navigate = useNavigate();

  const logout = () => {
    handleLogout();
    navigate("/signin");
  };

  useEffect(() => {}, [isAuthenticated]);

  return (
    <HeaderStyled>
      <ContainerStyled>
        <LogoStyled src={logoSolar} alt="logo solar tambau" />
        <TitleStyled>
          {isAuthenticated ? "Controle Máquinas" : "Lavanderia"}
        </TitleStyled>
      </ContainerStyled>

      <NavStyled>
        <ButtonStyled className={isAuthenticated ? "logged" : "unlogged"} onClick={() => logout()}>
          {isAuthenticated ? "Logout" : "Login"}
        </ButtonStyled>

        <ButtonStyled className="btn-theme" onClick={handleTheme}>
          {theme === "dark" ? (
            <BsSunFill size={25} color="#f5d20a" />
          ) : (
            <BsMoonStarsFill size={20} />
          )}
        </ButtonStyled>
      </NavStyled>
    </HeaderStyled>
  );
};
