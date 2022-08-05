import { useState } from "react";

import {
  Container,
  ContainerLeft,
  ContainerRight,
  DivLink,
  Header as ContainerHeader,
  DropMenu,
  DivName,
} from "./styles";
import LogoHeader from "../../assets/logo-header.svg";
import { List, X } from "phosphor-react";

const HeaderAdmin = () => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
                <button>Editar endereço</button>
              </li>
              <li>
                <button>Editar perfil</button>
              </li>
              <li>
                <button>Minhas compras</button>
              </li>
              <li>
                <button>Sair</button>
              </li>
            </ul>
          </nav>
          <DivLink>
            <a href="">Carros</a>
            <a href="">Motos</a>
            <a href="">Leilão</a>
          </DivLink>
        </ContainerLeft>
        <ContainerRight
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <DivName>SL</DivName>
          <span>Samuel Leão</span>
          <DropMenu isOpen={isOpen}>
            <a href="#">Editar perfil</a>
            <a href="#">Editar endereço</a>
            <a href="#">Minhas compras</a>
            <a href="#">Sair</a>
          </DropMenu>
        </ContainerRight>
      </Container>
    </ContainerHeader>
  );
};

export default HeaderAdmin;
