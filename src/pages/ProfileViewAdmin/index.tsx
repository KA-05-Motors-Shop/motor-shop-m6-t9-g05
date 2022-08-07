import Button from "../../components/Button";
import theme from "../../styles/theme";
import {
  Container,
  SectionUser,
  SectionVehicles,
  SectionLeilao,
  DivUser,
  SpanName,
  Content,
  H2
} from "./styles";
import { useModal } from "../../providers/Modal";
import CreateAd from "../../components/Modals/ModalCreateAd";
import HeaderAdmin from "../../components/HeaderAdmin";
import CardShowcase from "../../components/Cards/CardShowcase";
import CardAuction from "../../components/Cards/CardAuction";
import Footer from "../../components/Footer";

const ProfileViewAdmin = () => {
  const { Switch, openCreateAdModal } = useModal();

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
              onClick={() => Switch("ModalCreateAd")}
            >
              Criar anuncio
            </Button>
          </Content>
        </DivUser>
      </SectionUser>

      <SectionLeilao>
        <H2>Leilão</H2>
        <ul>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <li>
              <CardAuction />
            </li>
          ))}
        </ul>
      </SectionLeilao>

      <SectionVehicles>
        <H2>Carros</H2>

        <ul>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <li>
              <CardShowcase isUser={false}/>
            </li>
          ))}
        </ul>
      </SectionVehicles>

      <SectionVehicles>
        <H2>Motos</H2>

        <ul>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <li>
              <CardShowcase isUser={false}/>
            </li>
          ))}
        </ul>
      </SectionVehicles>

      <Footer />
      {openCreateAdModal && <CreateAd />}
    </Container>
  );
};

export default ProfileViewAdmin;
