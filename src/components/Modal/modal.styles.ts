import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(200, 200, 200, 0.7);
`;

export const ModalItems = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  color: ${({ theme }) => theme.text.secondary};
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  box-shadow: 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.057),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.083),
    100px 100px 80px rgba(0, 0, 0, 0.14);

  & ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & p {
      text-align: center;
    }
  }

  & div {
    width: 100%;
  }

  & .close {
    color: ${({ theme }) => theme.text.secondary};
    border: none;
    font-size: 2rem;
    cursor: pointer;
    float: right;
    height: 50px;
    width: 50px;
    background-color: transparent;
    &:hover {
      opacity: 0.8;
    }
  }
`;
