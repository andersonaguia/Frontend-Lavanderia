import { SignInFormValues } from "../../pages/SignIn/signIn.types";
import { UserRole } from "./user_role.enum";

export interface AuthenticationProviderProps {
  children: React.ReactNode;
}

export interface DecodedToken {
  id: number;
  firstName: string;
  occupation: string;
  email: string;
  role: UserRole;
}

export interface AuthenticationInterfaces {
  isAuthenticated: boolean;
  token: string;
  loading: boolean;
  decodedToken: any;
  errorMessage: string;
  handleLogin: (body: SignInFormValues) => Promise<any>;
  handleLogout: () => void;
  userData: DecodedToken;
}
