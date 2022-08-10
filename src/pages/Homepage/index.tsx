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

const Homepage = () => {
  return (
    <Container>
      <Header />

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
            >
              Leilão
            </Button>
            <Button
              color={theme.colors.grey10}
              bgcolor={theme.colors.brand2}
              borderColor={theme.colors.grey10}
              width={160}
              height={40}
            >
              Carros
            </Button>
            <Button
              color={theme.colors.grey10}
              bgcolor={theme.colors.brand2}
              borderColor={theme.colors.grey10}
              width={160}
              height={40}
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
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <SwiperSlide style={{ width: "100%", maxWidth: "520px" }}>
              <CardAuction />
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
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <SwiperSlide style={{ width: "100%", maxWidth: "325px" }}>
              <CardShowcase isUser={false} />
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
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <SwiperSlide style={{ width: "100%", maxWidth: "325px" }}>
              <CardShowcase isUser={false} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SectionVehicles>

      <Footer />
    </Container>
  );
};

export default Homepage;
