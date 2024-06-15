import styled from "styled-components";

export const BackgroundStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;
