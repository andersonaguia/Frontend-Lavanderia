import { createContext } from "react";
import { MachinesInterfaces, commandMachines } from "./Machines.interfaces";

export const MachinesContext = createContext<MachinesInterfaces>({
  handleStatusMachines: () => Promise.resolve(),
  commandMachines: [],
  handleLastMachineHistory: () => Promise.resolve(),
  lastMachineHistory: [],
  control: false,
  handleChangeMachineCommand: () => Promise.resolve(),
});
