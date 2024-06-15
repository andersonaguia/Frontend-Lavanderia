import styled from "styled-components";

export const DialogStyled = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;

  & div {
    display: flex;
    justify-content: space-between;
  }

  & p {
    color: #111111;
  }

  & button {
    position: relative;
    width: 8rem;
    padding: 1rem;
    border-radius: 2rem;
    border: none;
    margin-top: 2rem;
    font-weight: bold;
    cursor: pointer;
    font-size: 1rem;

    &.yes {
      background-color: ${({ theme }) => theme.colors.off};
      color: ${({ theme }) => theme.text.on};
    }

    &.no {
      background-color: ${({ theme }) => theme.colors.on};
      color: ${({ theme }) => theme.text.off};
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;
