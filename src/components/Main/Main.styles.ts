import styled from 'styled-components';

export const MainStyled = styled.main`
display: grid;
grid-template-columns: repeat(4, 1fr);
justify-items: center;
align-items: center;
width: 100%;
min-height: 85vh;
background-color: ${({theme}) => theme.colors.primary};
padding: 0 2rem;
`