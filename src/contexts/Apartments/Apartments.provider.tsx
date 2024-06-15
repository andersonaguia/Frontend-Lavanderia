import { useEffect, useState } from "react";
import {
  ApartmentsInterfaces,
  ApartmentsProviderProps,
  apartment,
} from "./Apartments.interfaces";
import {
  findAllApartments, signIn,
} from "../../services/api/api";
import { ApartmentsContext } from "./Apartments.context";

export const ApartmentsProvider: React.FC<ApartmentsProviderProps> = ({
  children,
}) => {
  const [control, setControl] = useState<boolean>(false);
  const [apartments, setApartments] = useState<apartment[]>([]);

  const handleApartments = async () => {
    await findAllApartments()
      .then((res) => {
        setApartments(res);
        setControl(!control);
      })
      .catch((error) => {
        alert(error);
      });
  };

  
  useEffect(() => {
   handleApartments();   
  }, []);

  const apartmentsContextValues: ApartmentsInterfaces = {
    handleApartments,
    apartments,
    control,
  };

  return (
    <ApartmentsContext.Provider value={apartmentsContextValues}>
      {children}
    </ApartmentsContext.Provider>
  );
};
