import { CaretUp } from "phosphor-react";
import Logo from "../../assets/Motors-shop.png";
import { scrollToTop } from "../../utils/scrollToTop";
import { Container } from "./styles";

const Footer = () => {
  return (
    <Container>
      <img src={Logo} alt="Motors Shop" />
      <span>&copy; 2022 - Todos os direitos reservados</span>
      <button onClick={scrollToTop}>
        <CaretUp size={20} weight="bold" />
      </button>
    </Container>
  );
};

export default Footer;
