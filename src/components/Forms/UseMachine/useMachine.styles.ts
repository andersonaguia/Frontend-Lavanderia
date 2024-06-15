import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 3rem;
  justify-content: space-between;
  flex-direction: column;

  & select {
    height: 2rem;
    border: 1px solid;
    border-radius: 0.2rem;
    cursor: pointer;
  }
`;

export const ButtonStyled = styled.button`
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

  &:hover {
    opacity: 0.8;
  }
`;
