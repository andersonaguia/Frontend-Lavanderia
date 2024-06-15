import { toast } from "react-toastify";
import { machineCommand } from "../../contexts/Machines/Machines.interfaces";
import { useMachines } from "../../contexts/Machines/useMachines";

import { DialogStyled } from "./dialog.styles";

type Props = {
  handleClose: () => void;
  machineData: machineCommand;
};

export const Dialog: React.FC<Props> = ({ handleClose, machineData }) => {
  const { handleChangeMachineCommand } = useMachines();

  const handleConfirm = async () => {
    machineData.isOn = false;

    toast.promise(
      handleChangeMachineCommand(machineData)
        .then((response) => {
          handleClose();
          return response;
        })
        .catch((error) => {
          throw new Error(error);
        }),
      {
        pending: "Desligando máquinas ...",
        success: "Máquinas desligadas com sucesso!",
        error: {
          render({ data }: { data: any }) {
            return (
              data.message ||
              "Ocorreu um erro inesperado. entre em contato com o administrador do sistema"
            );
          },
        },
      }
    );
  };

  return (
    <DialogStyled>
      <p>Deseja realmente desligar as máquinas?</p>
      <div>
        <button className="yes" onClick={handleConfirm}>
          Sim
        </button>
        <button className="no" onClick={handleClose}>
          Não
        </button>
      </div>
    </DialogStyled>
  );
};
