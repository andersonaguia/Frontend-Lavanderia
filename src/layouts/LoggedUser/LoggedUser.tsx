import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Main } from "../../components/Main/Main";
import { useAuthentication } from "../../contexts/Authentication/useAuthentication";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useCustomTheme } from "../../contexts/CustomTheme/useCustomTheme";
import { themeLight } from "../../themes/themeLight";
import { themeDark } from "../../themes/themeDark";
import { Background } from "../../components/Background/Background";

export const LoggedUser: React.FC = () => {
  const { isAuthenticated } = useAuthentication();
  const { theme } = useCustomTheme();
  const navigate = useNavigate();

  useEffect(() => {}, [theme]);

  useEffect(() => {
    isAuthenticated ? navigate("/logged") : navigate("/overview");
  }, [isAuthenticated]);

  return (
    <ThemeProvider theme={theme == "light" ? themeLight : themeDark}>
      <Background>
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </Background>
    </ThemeProvider>
  );
};
