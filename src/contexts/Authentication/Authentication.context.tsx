import { createContext } from "react";
import { AuthenticationInterfaces } from "./authentication.interfaces";
import { UserRole } from "./user_role.enum";

export const AuthenticationContext = createContext<AuthenticationInterfaces>({
  isAuthenticated: false,
  token: "",
  loading: false,
  decodedToken: null,
  errorMessage: "",
  handleLogin: () => Promise.resolve(),
  handleLogout: () => Promise.resolve(),
  userData: {
    id: 0,
    firstName: "",
    occupation: "",
    email: "",
    role: UserRole.USER,
  },
});
