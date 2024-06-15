import { useEffect, useState } from "react";
import {
  MachinesInterfaces,
  MachinesProviderProps,
  commandMachines,
  lastMachineHistory,
  machineCommand,
} from "./Machines.interfaces";
import { MachinesContext } from "./Machines.context";
import {
  changeMachineCommand,
  findCommandMachines,
  findLastMachineHistory,
} from "../../services/api/api";

export const MachinesProvider: React.FC<MachinesProviderProps> = ({
  children,
}) => {
  const [control, setControl] = useState<boolean>(false);
  const [commandMachines, setCommandMachines] = useState<commandMachines[]>([]);
  const [lastMachineHistory, setLastMachineHistory] = useState<
    lastMachineHistory[]
  >([]);

  const handleStatusMachines = async () => {
    await findCommandMachines()
      .then((res) => {
        setCommandMachines(res);
        setControl(!control);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleLastMachineHistory = async () => {
    await findLastMachineHistory()
      .then((res) => {
        setLastMachineHistory(res);
        setControl(!control);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleChangeMachineCommand = (data: machineCommand) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await changeMachineCommand(data);
        resolve(response);
      } catch (error: any) {
        const errorMessage: string = error.message;
        if (errorMessage.length > 0) {
          reject(error.message);
        } else {
          reject(
            "Ocorreu um erro inesperado. Informe ao administrador do sistema e tente novamente!"
          );
        }
      }
    });
  };

  useEffect(() => {
    handleStatusMachines();
    handleLastMachineHistory();
    const intervalId = setInterval(() => {
      handleStatusMachines();
      handleLastMachineHistory();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const machinesContextValues: MachinesInterfaces = {
    handleStatusMachines,
    commandMachines,
    handleLastMachineHistory,
    lastMachineHistory,
    control,
    handleChangeMachineCommand,
  };

  return (
    <MachinesContext.Provider value={machinesContextValues}>
      {children}
    </MachinesContext.Provider>
  );
};
