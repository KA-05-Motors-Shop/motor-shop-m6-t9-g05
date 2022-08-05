import Button from "../../components/Button";
import { CaretUp } from "phosphor-react";
import Logo from "../../assets/Motors-shop.png";
import theme from "../../styles/theme";
import {
  Container,
  SectionUser,
  SectionVehicles,
  SectionLeilao,
  DivUser,
  SpanName,
  Content,
  H2,
  Footer,
} from "./styles";
import { useModal } from "../../providers/Modal";
import CreateAd from "../../components/Modals/ModalCreateAd";
import HeaderAdmin from "../../components/HeaderAdmin";


const ProfileViewAdmin = () => {
    const {Switch, openCreateAdModal} = useModal()


  return (
    <Container>
        <HeaderAdmin />
      <SectionUser>
        <DivUser>
          <Content>
            <div>
              <span>SL</span>
            </div>
            <SpanName>
              Samuel Leão <span>Anunciante</span>
            </SpanName>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              reiciendis
            </p>
            <Button
              color={theme.colors.brand1}
              bgcolor={theme.colors.gray10}
              borderColor={theme.colors.brand1}
              width={160}
              height={40}
              onClick={() => Switch('ModalCreateAd')}
            >
              Criar anuncio
            </Button>
          </Content>
        </DivUser>
      </SectionUser>

      <SectionLeilao>
        <H2>Leilão</H2>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </SectionLeilao>

      <SectionVehicles>
        <H2>Carros</H2>

        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </SectionVehicles>

      <SectionVehicles>
        <H2>Motos</H2>

        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </SectionVehicles>

      <Footer>
        <img src={Logo} alt="Motors Shop" />
        <span>&copy; 2022 - Todos os direitos reservados</span>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <CaretUp size={20} weight="bold" />
        </button>
      </Footer>
      {openCreateAdModal && <CreateAd />}
    </Container>
  );
};

export default ProfileViewAdmin;
