import { CustomThemeProvider } from "./contexts/CustomTheme/CustomTheme.provider";
import { MachinesProvider } from "./contexts/Machines/Machines.provider";
import { ApartmentsProvider } from "./contexts/Apartments/Apartments.provider";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { AuthenticationProvider } from "./contexts/Authentication/Authentication.provider";

function App() {
  return (
    <>
      <CustomThemeProvider>
        <AuthenticationProvider>
          <ApartmentsProvider>
            <MachinesProvider>
              <BrowserRouter>
                <Router />
              </BrowserRouter>
            </MachinesProvider>
          </ApartmentsProvider>
        </AuthenticationProvider>
      </CustomThemeProvider>
    </>
  ); 
}

export default App;
