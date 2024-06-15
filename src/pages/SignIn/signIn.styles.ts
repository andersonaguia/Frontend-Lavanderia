import styled from "styled-components";

export const ContainerStyled = styled.div`
  width: 35%;
  height: 55%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.off};
  padding: .5rem 0;

  & form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: ${({ theme }) => theme.text.primary};
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.off};
    gap: 2rem;

    & h2 {
      font-size: 2rem;
    }

    & input {
      width: 100%;
      height: 2rem;
      font-size: 0.8rem;
      border-radius: .5rem;
      padding-left: .5rem;
      border: none;
    }

    & div {
      width: 80%;
    }

    & label {
      font-size: 0.8rem;
      border-color: transparent;
    }

    & span {
      width: 80%;
      font-size: 0.8rem;
      background-color: ${({ theme }) => theme.colors.off};
    }

    & button {
      text-transform: uppercase;
      font-weight: bold;
      width: 8rem;
      padding: 1rem;
      border-radius: 2rem;
      border: none;
      margin: auto;
      margin-top: 1rem;
      cursor: pointer;
      font-size: 1rem;
      background-color: ${({ theme }) => theme.colors.on};
      color: ${({ theme }) => theme.text.off};
    }

    & button:hover {
      opacity: 0.8;
    }
  }
`;
