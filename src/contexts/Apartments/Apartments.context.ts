import { createContext } from "react";
import { ApartmentsInterfaces} from "./Apartments.interfaces";

export const ApartmentsContext = createContext<ApartmentsInterfaces>({
  handleApartments: () => Promise.resolve(),
  apartments: [],
  control: false,
});
