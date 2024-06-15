import { createContext } from "react";
import { AuthenticationInterfaces } from "./authentication.interfaces";

export const AuthenticationContext = createContext<AuthenticationInterfaces>({
  isAuthenticated: false,
  token: "",
  loading: false,
  decodedToken: null,
  errorMessage: "",
  error: false,
  handleLogin: () => Promise.resolve(),
  handleLogout: () => Promise.resolve(),
  handleCloseError: () => Promise.resolve()
});
