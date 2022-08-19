import CardAuction from "../../components/Cards/CardAuction";
import Header from "../../components/Header";
import {
  Container,
  Content,
  DivButtons,
  H2,
  SectionLeilao,
  SectionTop,
  SectionVehicles,
} from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../../components/Footer";
import CardShowcase from "../../components/Cards/CardShowcase";
import "swiper/css";
import HeaderAdmin from "../../components/HeaderAdmin";
import { randomColors } from "../../utils/randomColors";
import { useUser } from "../../providers/User";
import { useAds } from "../../providers/Ads";
import { useEffect } from "react";
import Loading from "../../components/Loading";
import EmptyList from "../../components/EmptyList";
import { calculateDate } from "../../utils/calculateDate";
import toast from "react-hot-toast";

const Homepage = () => {
  document.title = "Home";
  const { userAuth, endSession } = useUser();
  const bgColor = randomColors();
  const days = calculateDate(userAuth.loggedIn);

  const { ads, getAds } = useAds();

  useEffect(() => {
    if (days === 3) {
      endSession();
      toast.error("Sua sessão expirou, faça login novamente!!");
    }

    getAds();
  }, []);

  if (!ads) {
    return <Loading bgColor={bgColor} />;
  }

  const leilao = ads.filter(({ type_of_ad }) => type_of_ad === "Leilão");
  const carros = ads.filter(
    ({ type_of_vehicle }) => type_of_vehicle === "Carro"
  );
  const motos = ads.filter(({ type_of_vehicle }) => type_of_vehicle === "Moto");

  return (
    <Container>
      {userAuth.token ? <HeaderAdmin bgColor={bgColor} /> : <Header />}

      <SectionTop>
        <Content>
          <p>Velocidade e experiência em um lugar feito para você</p>
          <span>Um ambiente feito para você explorar o seu melhor</span>
          <DivButtons>
            <a href="#leilao">Leilão</a>
            <a href="#carros">Carros</a>
            <a href="#motos">Motos</a>
          </DivButtons>
        </Content>
      </SectionTop>

      <SectionLeilao id="leilao">
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
                key={vehicle.id}
              >
                <CardAuction vehicle={vehicle} key={vehicle.id} />
              </SwiperSlide>
            ))
          ) : (
            <EmptyList />
          )}
        </Swiper>
      </SectionLeilao>

      <SectionVehicles id="carros">
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
                key={vehicle.id}
              >
                <CardShowcase vehicle={vehicle} key={vehicle.id} />
              </SwiperSlide>
            ))
          ) : (
            <EmptyList />
          )}
        </Swiper>
      </SectionVehicles>

      <SectionVehicles id="motos">
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
                key={vehicle.id}
              >
                <CardShowcase vehicle={vehicle} key={vehicle.id} />
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

export default Homepage;
