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
import { User, useUser } from "../../providers/User";
import Loading from "../../components/Loading";
import EmptyList from "../../components/EmptyList";
import { calculateDate } from "../../utils/calculateDate";
import EditProfile from "../../components/Modals/ModalEditProfile";
import { initalLetters } from "../../utils/initialLetters";
import EditAddress from "../../components/Modals/ModalEditAddress";

const ProfileViewAdmin = () => {
  const {
    Switch,
    openCreateAdModal,
    openSucessModal,
    openEditAdModal,
    openDeleteModal,
    openEditProfileModal,
    openEditAddressModal,
  } = useModal();

  const [vehicle_id, setVehicleId] = useState<string>("");

  const { getUser, userAuth, logout } = useUser();
  const [user, setUser] = useState<User>();
  const days = calculateDate(userAuth.loggedIn);
  const initials = initalLetters(user?.name);

  if (days >= 3) {
    logout();
    return;
  }

  const fetchUser = async () => {
    if (userAuth.userId) {
      const res = await getUser(userAuth.userId);
      setUser(res);
    }
  };

  const bgColor = randomColors();

  useEffect(() => {
    openCreateAdModal && scrollToTop();
    openEditAdModal && scrollToTop();
    document.body.style.overflowY =
      openCreateAdModal ||
      openSucessModal ||
      openEditAdModal ||
      openDeleteModal ||
      openEditProfileModal ||
      openEditAddressModal
        ? "hidden"
        : "scroll";
    fetchUser();
  }, [
    openCreateAdModal,
    openSucessModal,
    openEditAdModal,
    openDeleteModal,
    openEditProfileModal,
    openEditAddressModal,
  ]);

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
              <span>{initials}</span>
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
          {leilao.length > 0 ? (
            leilao.map((vehicle) => (
              <SwiperSlide
                style={{ width: "100%", maxWidth: "500px" }}
                key={vehicle.title}
              >
                <CardAuction
                  isUser={false}
                  vehicle={vehicle}
                  setVehicleId={setVehicleId}
                  key={vehicle.title}
                />
              </SwiperSlide>
            ))
          ) : (
            <EmptyList admin={true} />
          )}
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
          {carros.length > 0 ? (
            carros.map((vehicle) => (
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
            ))
          ) : (
            <EmptyList admin={true} />
          )}
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
          {motos.length > 0 ? (
            motos.map((vehicle) => (
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
            ))
          ) : (
            <EmptyList admin={true} />
          )}
        </Swiper>
      </SectionVehicles>

      <Footer />
      {openCreateAdModal && <CreateAd />}
      {openSucessModal && <ModalSucess />}
      {openEditAdModal && <EditAd vehicle_id={vehicle_id} />}
      {openDeleteModal && <ModalDelete vehicle_id={vehicle_id} />}
      {openEditProfileModal && <EditProfile {...user} />}
      {openEditAddressModal && <EditAddress {...user} />}
    </Container>
  );
};

export default ProfileViewAdmin;
