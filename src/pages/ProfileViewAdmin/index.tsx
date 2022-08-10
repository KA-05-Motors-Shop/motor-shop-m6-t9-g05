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
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { scrollToTop } from "../../utils/scrollToTop";
import Footer from "../../components/Footer";
import ModalSucess from "../../components/Modals/ModalSucess";
import { randomColors } from "../../utils/randomColors";


const ProfileViewAdmin = () => {
  const { Switch, openCreateAdModal, openSucessModal } = useModal();

  const bgColor = randomColors()

  useEffect(() => {
    openCreateAdModal && scrollToTop()
    document.body.style.overflowY = openCreateAdModal || openSucessModal ? "hidden" : "scroll";
  }, [openCreateAdModal, openSucessModal]);

  return (
    <Container>
      <HeaderAdmin bgColor={bgColor}/>
      <SectionUser>
        <DivUser>
          <Content bgColor={bgColor}>
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
      {openCreateAdModal && <CreateAd />}
      {openSucessModal && <ModalSucess />}
    </Container>
  );
};

export default ProfileViewAdmin;
