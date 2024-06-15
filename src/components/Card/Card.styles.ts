import styled, { keyframes } from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 16rem;
  height: 28rem;
  border-radius: 10px;
  padding: 1rem 1rem;

  &.on {
    background-color: ${({ theme }) => theme.colors.on};
  }

  &.off {
    background-color: ${({ theme }) => theme.colors.off};
  }
`;

export const PStyled = styled.p`
  font-size: 2rem;
  text-align: center;
  padding: 0.5rem;

  &.on {
    color: ${({ theme }) => theme.text.off};
  }

  &.off {
    color: ${({ theme }) => theme.text.primary};
  }
`;

export const H2Styled = styled.h2`
  text-transform: uppercase;
  padding-bottom: 1rem;

  &.on {
    color: ${({ theme }) => theme.text.off};
  }

  &.off {
    color: ${({ theme }) => theme.text.primary};
  }
`;

export const H3Styled = styled.h3`
  font-weight: 400;
  text-transform: uppercase;
  padding-top: 1rem;

  &.on {
    color: ${({ theme }) => theme.text.off};
  }

  &.off {
    color: ${({ theme }) => theme.text.primary};
  }
`;

export const UlStyled = styled.ul`
  width: 100%;
  list-style-type: none;

  &.on {
    color: ${({ theme }) => theme.text.off};
  }

  &.off {
    color: ${({ theme }) => theme.text.primary};
  }

  & li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ButtonStyled = styled.button`
  position: relative;
  width: 8rem;
  padding: 1rem;
  border-radius: 2rem;
  border: none;
  margin: auto;
  margin-top: 1rem;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;

  &.on {
    background-color: ${({ theme }) => theme.colors.off};
    color: ${({ theme }) => theme.text.on};
  }

  &.off {
    background-color: ${({ theme }) => theme.colors.on};
    color: ${({ theme }) => theme.text.off};
  }
`;
