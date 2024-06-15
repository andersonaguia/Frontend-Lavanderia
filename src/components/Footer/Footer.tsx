import { FooterStyled } from "./Footer.styles";

export const Footer: React.FC = () => {
   return (
    <FooterStyled>
      <div className="container">
        <p>
          &copy; 2023 - Anderson Aguiar. Todos os direitos reservados.
        </p>
      </div>
    </FooterStyled>
  );
};
