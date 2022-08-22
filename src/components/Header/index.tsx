import { useState } from "react";

import {
  Container,
  ContainerLeft,
  ContainerRight,
  DivLink,
  Header as ContainerHeader,
} from "./styles";
import LogoHeader from "../../assets/logo-header.svg";
import { List, X } from "phosphor-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleNavLinks = () => setIsActive(!isActive);

  const history = useNavigate()

  return (
    <ContainerHeader>
      <Container>
        <ContainerLeft>
          <img src={LogoHeader} alt="logotipo Motors Shop" onClick={() => history('/')}/>
          {isActive ? (
            <X onClick={handleNavLinks} />
          ) : (
            <List onClick={handleNavLinks} />
          )}

          <nav className={`${isActive ? "active" : "inactive"}`}>
            <ul>
              <li>
                <a href="/ads/filter/carros">Carros</a>
              </li>
              <li>
                <a href="/ads/filter/motos">Motos</a>
              </li>
              <li>
                <a href="/ads/filter/leilao">Leilão</a>
              </li>
              <li>
                <a href="/login">Fazer Login</a>
              </li>
              <li>
                <button onClick={() => history('/register')}>Cadastrar</button>
              </li>
            </ul>
          </nav>
          <DivLink>
            <a href="/ads/filter/carros">Carros</a>
            <a href="/ads/filter/motos">Motos</a>
            <a href="/ads/filter/leilao">Leilão</a>
          </DivLink>
        </ContainerLeft>
        <ContainerRight>
          <button onClick={() => history('/login')}>Login</button>
          <button onClick={() => history('/register')}>Cadastrar</button>
        </ContainerRight>
      </Container>
    </ContainerHeader>
  );
};

export default Header