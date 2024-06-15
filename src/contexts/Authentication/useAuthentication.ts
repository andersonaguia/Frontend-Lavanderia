import { useContext } from "react";
import { AuthenticationContext } from "./Authentication.context";

export const useAuthentication = () => {
  return useContext(AuthenticationContext);
};
