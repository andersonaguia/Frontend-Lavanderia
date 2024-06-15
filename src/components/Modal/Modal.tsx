import React, { ReactNode } from "react";
import { ModalContainer, ModalItems } from "./modal.styles";

type Props = {
  handleOpen: () => void;
  handleClose: () => void;
  open: boolean;
  children: ReactNode;
};

export const CustomModal: React.FC<Props> = ({
  handleOpen,
  handleClose,
  open,
  children,
}) => {
  return (
    <ModalContainer>
      <div>
        <ModalItems>
          <div>
            <button className="close" onClick={handleClose}>
              &times;
            </button>
          </div>
          <div className="message">{children}</div>
        </ModalItems>
      </div>
    </ModalContainer>
  );
};
