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
  H2,
} from "./styles";
import { useModal } from "../../providers/Modal";
import CreateAd from "../../components/Modals/ModalCreateAd";
import HeaderAdmin from "../../components/HeaderAdmin";
import CardShowcase from "../../components/Cards/CardShowcase";
import CardAuction from "../../components/Cards/CardAuction";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { scrollToTop } from "../../utils/scrollToTop";
import Footer from "../../components/Footer";
import ModalSucess from "../../components/Modals/ModalSucess";
import { randomColors } from "../../utils/randomColors";
import EditAd from "../../components/Modals/ModalEditAd";
import ModalDelete from "../../components/Modals/ModalDelete";
import { useUser } from "../../providers/User";

const ProfileViewAdmin = () => {
  const {
    Switch,
    openCreateAdModal,
    openSucessModal,
    openEditAdModal,
    openDeleteModal,
  } = useModal();

  const { getUser, user, userAuth } = useUser();

  const bgColor = randomColors();

  useEffect(() => {
    openCreateAdModal && scrollToTop();
    openEditAdModal && scrollToTop();
    document.body.style.overflowY =
      openCreateAdModal || openSucessModal || openEditAdModal || openDeleteModal
        ? "hidden"
        : "scroll";
    getUser(userAuth.userId);
  }, [openCreateAdModal, openSucessModal, openEditAdModal]);

  const leilao = user.vehicles
    ? user.vehicles.filter(({ type_of_ad }) => type_of_ad === "Leilão")
    : [];

  const motos = user.vehicles
    ? user.vehicles.filter(({ type_of_vehicle }) => type_of_vehicle === "Moto")
    : [];
  const carros = user.vehicles
    ? user.vehicles.filter(({ type_of_vehicle }) => type_of_vehicle === "Carro")
    : [];

  return (
    <Container>
      <HeaderAdmin bgColor={bgColor} />
      <SectionUser>
        <DivUser>
          <Content bgColor={bgColor}>
            <div>
              <span>SL</span>
            </div>
            <SpanName>
              {user.name} <span>{user.account_type}</span>
            </SpanName>
            <p>{user.description}</p>
            <Button
              color={theme.colors.brand1}
              bgcolor={theme.colors.grey10}
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
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          wrapperTag="ul"
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          {leilao.map((vehicle) => (
            <SwiperSlide style={{ width: "100%", maxWidth: "325px" }}>
              <CardAuction vehicle={vehicle} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SectionLeilao>

      <SectionVehicles>
        <H2>Carros</H2>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          wrapperTag="ul"
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {carros.map((vehicle) => (
            <SwiperSlide style={{ width: "100%", maxWidth: "325px" }}>
              <CardShowcase isUser={false} vehicle={vehicle} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SectionVehicles>

      <SectionVehicles>
        <H2>Motos</H2>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          wrapperTag="ul"
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {motos.map((vehicle) => (
            <SwiperSlide style={{ width: "100%", maxWidth: "325px" }}>
              <CardShowcase isUser={false} vehicle={vehicle} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SectionVehicles>

      <Footer />
      {openCreateAdModal && <CreateAd />}
      {openSucessModal && <ModalSucess />}
      {openEditAdModal && <EditAd />}
      {openDeleteModal && <ModalDelete />}
    </Container>
  );
};

export default ProfileViewAdmin;
