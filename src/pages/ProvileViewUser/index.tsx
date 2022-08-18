import {
  Container,
  SectionUser,
  SectionVehicles,
  DivUser,
  SpanName,
  Content,
  H2,
} from "./styles";
import HeaderAdmin from "../../components/HeaderAdmin";
import CardShowcase from "../../components/Cards/CardShowcase";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Footer from "../../components/Footer";
import { randomColors } from "../../utils/randomColors";
import { useUser } from "../../providers/User";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { initalLetters } from "../../utils/initialLetters";
import EmptyList from "../../components/EmptyList";

const ProfileViewUser = () => {
  const { id } = useParams<{ id: string }>();
  const bgColor = randomColors();

  const { getUser, user, userAuth } = useUser();

  useEffect(() => {
    if (id) getUser(id);
  }, []);

  if (!user) {
    return <Loading bgColor={bgColor} />;
  }

  const motos = user.vehicles
    ? user.vehicles.filter(({ type_of_vehicle }) => type_of_vehicle === "Moto")
    : [];
  const carros = user.vehicles
    ? user.vehicles.filter(({ type_of_vehicle }) => type_of_vehicle === "Carro")
    : [];

  const initials = initalLetters(user.name);

  document.title = `Profile | ${user.name}`;

  return (
    <Container>
      {userAuth.token ? <HeaderAdmin bgColor={bgColor} /> : <Header />}
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
          </Content>
        </DivUser>
      </SectionUser>
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
                <CardShowcase vehicle={vehicle} key={vehicle.title} />
              </SwiperSlide>
            ))
          ) : (
            <EmptyList />
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
                <CardShowcase vehicle={vehicle} key={vehicle.title} />
              </SwiperSlide>
            ))
          ) : (
            <EmptyList />
          )}
        </Swiper>
      </SectionVehicles>

      <Footer />
    </Container>
  );
};

export default ProfileViewUser;
