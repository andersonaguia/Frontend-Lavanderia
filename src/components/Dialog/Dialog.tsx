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
    await handleChangeMachineCommand(machineData);
    handleClose();
  };

  return (
    <DialogStyled>
      <p>Deseja realmente desligar as máquinas?</p>
      <div>
        <button className="yes" onClick={handleConfirm}>Sim</button>
        <button className="no" onClick={handleClose}>Não</button>
      </div>
    </DialogStyled>
  );
};
