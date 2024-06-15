import { useEffect, useState } from "react";
import { signIn } from "../../services/api/api";
import { AuthenticationContext } from "./Authentication.context";
import {
  AuthenticationInterfaces,
  AuthenticationProviderProps,
} from "./authentication.interfaces";
import { useJwt } from "react-jwt";
import { SignInFormValues } from "../../pages/SignIn/signIn.types";

export const AuthenticationProvider: React.FC<AuthenticationProviderProps> = ({
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { decodedToken, isExpired } = useJwt(token);

  useEffect(() => {
    const storageData = localStorage.getItem("TOKEN");
    if (storageData) {
      setToken(storageData);
      setIsAuthenticated(true);
      console.log("DECODED: ", decodedToken);
    }
  }, [token]);

  const handleLogin = async (body: SignInFormValues) => {
    setLoading(true);
    setError(false);
    await signIn(body)
      .then((response) => {
        if (response.body.statusCode == 401) {
          setError(true);
          setErrorMessage(response.body.message);
          setIsAuthenticated(false);
          setLoading(false);
        } else {
          setToken(response.body.token);
          localStorage.setItem("TOKEN", JSON.stringify(response.body.token));
          setIsAuthenticated(true);
          setError(false);
          setLoading(false);
        }
      })
      .catch((error) => {
        setError(true);
        setErrorMessage(
          "Ocorreu um erro inesperado. Informe ao administrador do sistema e tente novamente!"
        );
        setIsAuthenticated(false);
        setLoading(false);
      });
  };

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("TOKEN");
    setIsAuthenticated(false);
  };

  const handleCloseError = () => {
    setError(false);
  };

  const authenticationContextValue: AuthenticationInterfaces = {
    isAuthenticated,
    token,
    handleLogin,
    loading,
    decodedToken,
    handleLogout,
    errorMessage,
    error,
    handleCloseError,
  };

  return (
    <AuthenticationContext.Provider value={authenticationContextValue}>
      {children}
    </AuthenticationContext.Provider>
  );
};
