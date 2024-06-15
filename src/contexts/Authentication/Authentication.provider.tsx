import { useEffect, useState } from "react";
import { signIn } from "../../services/api/api";
import { AuthenticationContext } from "./Authentication.context";
import {
  AuthenticationInterfaces,
  AuthenticationProviderProps,
  DecodedToken,
} from "./authentication.interfaces";
import { useJwt } from "react-jwt";
import { SignInFormValues } from "../../pages/SignIn/signIn.types";
import { UserRole } from "./user_role.enum";

export const AuthenticationProvider: React.FC<AuthenticationProviderProps> = ({
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { decodedToken, isExpired } = useJwt<any>(token);
  const [userData, setUserData] = useState<DecodedToken>({
    id: 0,
    firstName: "",
    occupation: "",
    email: "",
    role: UserRole.USER,
  });

  useEffect(() => {
    const storageData = localStorage.getItem("TOKEN");
    if (storageData) {
      setToken(storageData);
      setIsAuthenticated(true);
      if (decodedToken) {
        const newUser: DecodedToken = {
          id: decodedToken.id,
          firstName: decodedToken.firstName,
          occupation: decodedToken.occupation,
          email: decodedToken.email,
          role: decodedToken.role,
        };
        console.log("DECODED: ", newUser);
        setUserData(newUser);
      }
    }
  }, [token]);

  const handleLogin = (body: SignInFormValues) => {
    return new Promise(async (resolve, reject) => {
      setLoading(true);
      try {
        const response = await signIn(body);

        setToken(response.body.token);
        localStorage.setItem("TOKEN", JSON.stringify(response.body.token));
        setIsAuthenticated(true);
        setLoading(false);
        resolve(response.body);
      } catch (error: any) {
        const errorMessage: string = error.response.data.body.message;
        if (errorMessage.length > 0) {
          setErrorMessage(errorMessage);
        } else {
          setErrorMessage(
            "Ocorreu um erro inesperado. Informe ao administrador do sistema e tente novamente!"
          );
        }

        setIsAuthenticated(false);
        setLoading(false);
        reject(error);
      }
    });
  };

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("TOKEN");
    setIsAuthenticated(false);
  };

  const authenticationContextValue: AuthenticationInterfaces = {
    isAuthenticated,
    token,
    handleLogin,
    loading,
    decodedToken,
    handleLogout,
    errorMessage,
    userData,
  };

  return (
    <AuthenticationContext.Provider value={authenticationContextValue}>
      {children}
    </AuthenticationContext.Provider>
  );
};
