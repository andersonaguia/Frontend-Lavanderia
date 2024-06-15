import { CustomThemeProvider } from "./contexts/CustomTheme/CustomTheme.provider";
import { MachinesProvider } from "./contexts/Machines/Machines.provider";
import { ApartmentsProvider } from "./contexts/Apartments/Apartments.provider";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { AuthenticationProvider } from "./contexts/Authentication/Authentication.provider";
import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastContainer } from "react-toastify";

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
