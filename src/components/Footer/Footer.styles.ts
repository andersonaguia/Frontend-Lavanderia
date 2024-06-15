import styled from 'styled-components';

export const FooterStyled = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: ${({theme}) => theme.text.primary};
  background-color: ${({theme}) => theme.colors.primary};
`;
