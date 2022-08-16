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
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { scrollToTop } from "../../utils/scrollToTop";
import Footer from "../../components/Footer";
import ModalSucess from "../../components/Modals/ModalSucess";
import { randomColors } from "../../utils/randomColors";
import EditAd from "../../components/Modals/ModalEditAd";
import ModalDelete from "../../components/Modals/ModalDelete";
import { useUser } from "../../providers/User";
import Loading from "../../components/Loading";

const ProfileViewAdmin = () => {
  const {
    Switch,
    openCreateAdModal,
    openSucessModal,
    openEditAdModal,
    openDeleteModal,
  } = useModal();

  const [vehicle_id, setVehicleId] = useState<string>("");

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
  }, [openCreateAdModal, openSucessModal, openEditAdModal, openDeleteModal]);

  if (!user) {
    return <Loading bgColor={bgColor} />;
  }

  const leilao = user.vehicles
    ? user.vehicles.filter(({ type_of_ad }) => type_of_ad === "Leilão")
    : [];

  const motos = user.vehicles
    ? user.vehicles.filter(({ type_of_vehicle }) => type_of_vehicle === "Moto")
    : [];
  const carros = user.vehicles
    ? user.vehicles.filter(({ type_of_vehicle }) => type_of_vehicle === "Carro")
    : [];

  document.title = `Profile | ${user.name}`;

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
              slidesPerView: 1,
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
            <SwiperSlide
              style={{ width: "100%", maxWidth: "550px" }}
              key={vehicle.title}
            >
              <CardAuction
                vehicle={vehicle}
                key={vehicle.title}
                setVehicleId={setVehicleId}
                isUser={false}
              />
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
              slidesPerView: 1,
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
            <SwiperSlide
              style={{ width: "100%", maxWidth: "400px" }}
              key={vehicle.title}
            >
              <CardShowcase
                isUser={false}
                vehicle={vehicle}
                setVehicleId={setVehicleId}
                key={vehicle.title}
              />
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
              slidesPerView: 1,
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
            <SwiperSlide
              style={{ width: "100%", maxWidth: "400px" }}
              key={vehicle.title}
            >
              <CardShowcase
                isUser={false}
                vehicle={vehicle}
                setVehicleId={setVehicleId}
                key={vehicle.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SectionVehicles>

      <Footer />
      {openCreateAdModal && <CreateAd />}
      {openSucessModal && <ModalSucess />}
      {openEditAdModal && <EditAd vehicle_id={vehicle_id} />}
      {openDeleteModal && <ModalDelete vehicle_id={vehicle_id} />}
    </Container>
  );
};

export default ProfileViewAdmin;
