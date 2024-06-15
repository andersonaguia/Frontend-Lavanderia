import { FormStyled, ButtonStyled } from "./useMachine.styles";
import { useForm } from "react-hook-form";
import { UseMachineFormValues } from "./useMachine.types";
import { useApartments } from "../../../contexts/Apartments/useApartments";
import { useEffect } from "react";
import { useMachines } from "../../../contexts/Machines/useMachines";

interface Props {
  machineId: number;
  handleClose: () => void;
}

export const FormUseMachine: React.FC<Props> = ({ machineId, handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UseMachineFormValues>();

  const { apartments, handleApartments } = useApartments();
  const { handleChangeMachineCommand } = useMachines();

  useEffect(() => {
    handleApartments();
  }, []);

  useEffect(() => {}, [apartments.length]);

  const submitForm = async (data: UseMachineFormValues) => {
    data.machineId = +machineId;
    data.isOn = true;
    data.apartmentId = +data.apartmentId;
    await handleChangeMachineCommand(data);
    handleClose();
  };

  return (
    <>
      <FormStyled onSubmit={handleSubmit(submitForm)}>
        <h3>Dados da Unidade</h3>
        <select {...register("apartmentId")} id="apartmentId">
          {apartments.length > 0
            ? apartments.map((apartment) => (
                <option key={apartment.id} value={apartment.id}>
                  {apartment.apartment}
                </option>
              ))
            : ""}
        </select>
        {errors.apartmentId && <span>{errors.apartmentId.message}</span>}
        <ButtonStyled type="submit">Confirmar</ButtonStyled>
      </FormStyled>
    </>
  );
};
