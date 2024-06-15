import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
`;

export const ContainerStyled = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-grow: 1;
`;

export const NavStyled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const TitleStyled = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.text.primary};
  letter-spacing: 1px;
`;

export const LogoStyled = styled.img`
  height: 4rem;
  padding-left: 1rem;
`;

export const ButtonStyled = styled.button`
  position: relative;
  padding: 0.4rem 2rem;
  border-radius: 2rem;
  border: none;
  margin: auto;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    opacity: 0.8;
  }

  &.logged {
    background-color: ${({ theme }) => theme.colors.off};
    color: ${({ theme }) => theme.text.on};
  }

  &.unlogged {
    background-color: ${({ theme }) => theme.colors.on};
    color: ${({ theme }) => theme.text.off};
  }

  &.btn-theme {
    width: 100px;
    padding: 0;
    border: none;
    background-color: transparent;
  }
`;
