import { useContext } from "react";
import { MachinesContext } from "./Machines.context";

export const useMachines = () => {
  return useContext(MachinesContext);
};