import { useEffect, useState } from "react";

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
import { useUser } from "../../providers/User";
import { useNavigate } from "react-router-dom";
import { initalLetters } from "../../utils/initialLetters";
import { useModal } from "../../providers/Modal";

interface HeaderProps {
  bgColor: string;
}

const HeaderAdmin = ({ bgColor }: HeaderProps) => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { logout, users, getUsers, userAuth } = useUser();

  const handleNavLinks = () => setIsActive(!isActive);
  const history = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  const user = users.find(({ id }) => id === userAuth.userId);
  const initials = initalLetters(user?.name);

  const { Switch } = useModal();

  return (
    <ContainerHeader>
      <Container>
        <ContainerLeft>
          <img
            src={LogoHeader}
            alt="logotipo Motors Shop"
            onClick={() => history("/")}
          />
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
                <button onClick={() => history("/profile_admin")}>
                  Perfil
                </button>
              </li>
              <li>
                <button onClick={() => Switch("ModalEditAddress")}>
                  Editar endereço
                </button>
              </li>
              <li>
                <button onClick={() => Switch("ModalEditProfile")}>
                  Editar perfil
                </button>
              </li>
              <li>
                <button>Minhas compras</button>
              </li>
              <li>
                <button onClick={logout}>Sair</button>
              </li>
            </ul>
          </nav>
          <DivLink>
            <a href="/ads/filter/carros">Carros</a>
            <a href="/ads/filter/motos">Motos</a>
            <a href="/ads/filter/leilao">Leilão</a>
          </DivLink>
        </ContainerLeft>
        <ContainerRight
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <DivName bgColor={bgColor} onClick={() => history("/profile_admin")}>
            {initials}
          </DivName>
          <span>{user?.name && user.name}</span>
          <DropMenu isOpen={isOpen}>
            <button onClick={() => Switch("ModalEditProfile")}>
              Editar perfil
            </button>
            <button onClick={() => Switch("ModalEditAddress")}>
              Editar endereço
            </button>
            <button>Minhas compras</button>
            <button onClick={logout}>Sair</button>
          </DropMenu>
        </ContainerRight>
      </Container>
    </ContainerHeader>
  );
};

export default HeaderAdmin;
