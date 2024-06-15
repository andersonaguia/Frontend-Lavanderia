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

export const LoggedOut: React.FC = () => {
  const { theme } = useCustomTheme();
  const { control, commandMachines, lastMachineHistory } = useMachines();

  useEffect(() => {}, [control]);

  useEffect(() => {
    console.log(lastMachineHistory.length > 0)
  }, [lastMachineHistory.length])

  if (lastMachineHistory.length > 0 && commandMachines.length > 0) {
    return (
      <ThemeProvider theme={theme == "light" ? themeLight : themeDark}>
        <Background>
          <Header />
          <Main
            children={
              <>
                {lastMachineHistory.map((machineHistory, i) => {
                  return (
                    <Card
                      key={i}
                      machineData={commandMachines[i]}
                      lastMachineHistory={machineHistory}
                      showButton={false}
                    />
                  );
                })}
              </>
            }
          />
          <Footer />
        </Background>
      </ThemeProvider>
    );
  }

  return <Loading />;
};
