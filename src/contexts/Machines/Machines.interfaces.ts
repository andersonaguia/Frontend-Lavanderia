export interface MachinesProviderProps {
  children: React.ReactNode;
}
export interface commandMachines {
  id: number;
  isOn: boolean;
  machineGroup: number;
}
export interface lastMachineHistory {
  createdAt: Date;
  isOn: boolean;
  apartment: {
    id: number;
    apartment: number;
  };
  machine: commandMachines;
}

export interface machineCommand {
  isOn: boolean;
  machineId: number;
  apartmentId: number;
}
export interface MachinesInterfaces {
  handleStatusMachines: () => void;
  commandMachines: commandMachines[];
  handleLastMachineHistory: () => void;
  lastMachineHistory: lastMachineHistory[];
  control: boolean;
  handleChangeMachineCommand: (data: machineCommand) => Promise<any>;
}
