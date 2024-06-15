import { useState } from "react";
import {
  CardStyled,
  H2Styled,
  H3Styled,
  PStyled,
  UlStyled,
  ButtonStyled,
} from "./Card.styles";
import { BiSolidWasher } from "react-icons/bi";
import { BiSolidDryer } from "react-icons/bi";
import {
  commandMachines,
  lastMachineHistory,
  machineCommand,
} from "../../contexts/Machines/Machines.interfaces";
import { formatDate } from "../../utils/formatDate";
import { useMachines } from "../../contexts/Machines/useMachines";
import { CustomModal } from "../Modal/Modal";
import { FormUseMachine } from "../Forms/UseMachine/UseMachine";
import { Dialog } from "../Dialog/Dialog";
interface Props {
  machineData: commandMachines;
  lastMachineHistory: lastMachineHistory;
  showButton: boolean;
}

export const Card: React.FC<Props> = (props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [isOn, setIsOn] = useState<boolean>(false);
  const { machineData, lastMachineHistory, showButton } = props;
  const [dataUse, setDataUse] = useState<machineCommand>({
    machineId: lastMachineHistory.machine.id,
    isOn: lastMachineHistory.isOn,
    apartmentId: lastMachineHistory.apartment.id,
  });
  const { handleChangeMachineCommand } = useMachines();

  const handleClick = () => {
    const data = {
      isOn: !machineData.isOn,
      machineId: machineData.id,
      apartmentId: lastMachineHistory.apartment.id,
    };

    setDataUse(data);
    //handleChangeMachineCommand(data);
  };

  const handleOpenModal = () => {
    setOpen(true);    
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <CardStyled className={machineData.isOn ? "on" : "off"}>
        <H2Styled className={machineData.isOn ? "on" : "off"}>
          Grupo {machineData.machineGroup}
        </H2Styled>
        <UlStyled className={machineData.isOn ? "on" : "off"}>
          <li>
            Lavadora
            <BiSolidWasher size={40} />
          </li>
          <li>
            Secadora
            <BiSolidDryer size={40} />
          </li>
        </UlStyled>
        <H3Styled className={machineData.isOn ? "on" : "off"}>
          Apartamento
        </H3Styled>
        <PStyled className={machineData.isOn ? "on" : "off"}>
          {!lastMachineHistory
            ? "LIVRE"
            : lastMachineHistory.apartment.apartment}
        </PStyled>
        <H3Styled className={machineData.isOn ? "on" : "off"}>
          {machineData.isOn ? "Hora Término" : null}
        </H3Styled>
        <PStyled className={machineData.isOn ? "on" : "off"}>
          {machineData.isOn
            ? !lastMachineHistory
              ? null
              : formatDate(lastMachineHistory.createdAt)
            : "CONCLUÍDO"}
        </PStyled>
        {showButton ? (
          <ButtonStyled
            onClick={handleOpenModal}
            className={machineData.isOn ? "on" : "off"}
          >
            {machineData.isOn ? "DESLIGAR" : "LIGAR"}
          </ButtonStyled>
        ) : (
          ""
        )}
      </CardStyled>
      {open ? (
        machineData.isOn ? (
          <CustomModal
            children={
              <Dialog machineData={dataUse} handleClose={handleCloseModal} />
            }
            handleOpen={handleOpenModal}
            handleClose={handleCloseModal}
            open={false}
          />
        ) : (
          <CustomModal
            children={
              <FormUseMachine
                machineId={machineData.id}
                handleClose={handleCloseModal}
              />
            }
            handleOpen={handleOpenModal}
            handleClose={handleCloseModal}
            open={false}
          />
        )
      ) : (
        ""
      )}
    </>
  );
};
