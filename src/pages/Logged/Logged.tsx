import { ThemeProvider } from "styled-components";
import { Header } from "../../components/Header/Header";
import { Main } from "../../components/Main/Main";
import { Footer } from "../../components/Footer/Footer";
import { useCustomTheme } from "../../contexts/CustomTheme/useCustomTheme";
import { themeLight } from "../../themes/themeLight";
import { themeDark } from "../../themes/themeDark";
import { Background } from "../../components/Background/Background";
import { useMachines } from "../../contexts/Machines/useMachines";
import { useEffect } from "react";
import { Card } from "../../components/Card/Card";
import { Loading } from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../../contexts/Authentication/useAuthentication";

export const Logged: React.FC = () => {
  const { theme } = useCustomTheme();
  const { control, commandMachines, lastMachineHistory } = useMachines();
  const { isAuthenticated } = useAuthentication();
  const navigate = useNavigate();

  useEffect(() => {}, [control]);

  useEffect(() => {}, [lastMachineHistory]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/signin");
    }
  }, [isAuthenticated]);

  return (
    <ThemeProvider theme={theme == "light" ? themeLight : themeDark}>
      <Background>
        <Header />
        <Main
          children={
            <>
              {commandMachines.length > 0 && lastMachineHistory.length > 0 ? (
                lastMachineHistory.map((machineHistory, i) => {
                  return (
                    <Card
                      key={i}
                      machineData={commandMachines[i]}
                      lastMachineHistory={machineHistory}
                      showButton={true}
                    />
                  );
                })
              ) : (
                <Loading />
              )}
            </>
          }
        />
        <Footer />
      </Background>
    </ThemeProvider>
  );
};
