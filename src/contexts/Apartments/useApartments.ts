import { useContext } from "react";
import { ApartmentsContext } from "./Apartments.context";

export const useApartments = () => {
  return useContext(ApartmentsContext);
};
