import { useState } from "react";

import {
  Container,
  ContainerLeft,
  ContainerRight,
  Header as ContainerHeader,
} from "./styles";
import LogoHeader from "../../assets/logo-header.svg";
import { List, X } from "phosphor-react";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleNavLinks = () => setIsActive(!isActive);

  return (
    <ContainerHeader>
      <Container>
        <ContainerLeft>
          <img src={LogoHeader} alt="logotipo Motors Shop" />
          {isActive ? (
            <X onClick={handleNavLinks} />
          ) : (
            <List onClick={handleNavLinks} />
          )}

          <nav className={`${isActive ? "active" : "inactive"}`}>
            <ul>
              <li>
                <a href="">Carros</a>
              </li>
              <li>
                <a href="">Motos</a>
              </li>
              <li>
                <a href="">Leilão</a>
              </li>
              <li>
                <a href="">Fazer Login</a>
              </li>
              <li>
                <button>Cadastrar</button>
              </li>
            </ul>
          </nav>
          <div className="links">
            <a href="">Carros</a>
            <a href="">Motos</a>
            <a href="">Leilão</a>
          </div>
        </ContainerLeft>
        <ContainerRight>
          <a href="">Login</a>
          <button>Cadastrar</button>
        </ContainerRight>
      </Container>
    </ContainerHeader>
  );
};
