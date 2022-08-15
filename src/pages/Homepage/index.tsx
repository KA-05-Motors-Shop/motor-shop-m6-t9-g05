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
import Button from "../../components/Button";
import theme from "../../styles/theme";
import "swiper/css";
import HeaderAdmin from "../../components/HeaderAdmin";
import { randomColors } from "../../utils/randomColors";
import { useUser } from "../../providers/User";
import { useAds } from "../../providers/Ads";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const { userAuth } = useUser();
  const bgColor = randomColors();
  const history = useNavigate();

  const { ads } = useAds();

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
            <Button
              color={theme.colors.grey10}
              bgcolor={theme.colors.brand2}
              borderColor={theme.colors.grey10}
              width={160}
              height={40}
              onClick={() => history("/ads/filter/leilao")}
            >
              Leilão
            </Button>
            <Button
              color={theme.colors.grey10}
              bgcolor={theme.colors.brand2}
              borderColor={theme.colors.grey10}
              width={160}
              height={40}
              onClick={() => history("/ads/filter/carros")}
            >
              Carros
            </Button>
            <Button
              color={theme.colors.grey10}
              bgcolor={theme.colors.brand2}
              borderColor={theme.colors.grey10}
              width={160}
              height={40}
              onClick={() => history("/ads/filter/motos")}
            >
              Motos
            </Button>
          </DivButtons>
        </Content>
      </SectionTop>

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
          {leilao.length > 0 ? (
            leilao.map((vehicle) => (
              <SwiperSlide style={{ width: "100%", maxWidth: "325px" }}>
                <CardAuction vehicle={vehicle} />
              </SwiperSlide>
            ))
          ) : (
            <h1>teste</h1>
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
          {carros.length > 0 ? (
            carros.map((vehicle) => (
              <SwiperSlide style={{ width: "100%", maxWidth: "325px" }}>
                <CardShowcase vehicle={vehicle} />
              </SwiperSlide>
            ))
          ) : (
            <h1>teste</h1>
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
          {motos.length > 0 ? (
            motos.map((vehicle) => (
              <SwiperSlide style={{ width: "100%", maxWidth: "325px" }}>
                <CardShowcase vehicle={vehicle} />
              </SwiperSlide>
            ))
          ) : (
            <h1>teste</h1>
          )}
        </Swiper>
      </SectionVehicles>

      <Footer />
    </Container>
  );
};

export default Homepage;
