import { CaretUp } from "phosphor-react";
import Logo from "../../assets/Motors-shop.png";
import { Conteiner } from "./styles";

const Footer = () => {
  return (
    <Conteiner>
      <img src={Logo} alt="Motors Shop" />
      <span>&copy; 2022 - Todos os direitos reservados</span>
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <CaretUp size={20} weight="bold" />
      </button>
    </Conteiner>
  );
};

export default Footer;
