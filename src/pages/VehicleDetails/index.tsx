import Header from "../../components/Header";
import HeaderAdmin from "../../components/HeaderAdmin";
import { randomColors } from "../../utils/randomColors";
import car from "../../assets/car1.png";
import Button from "../../components/Button";
import theme from "../../styles/theme";
import Comments from "../../components/Comments";
import Footer from "../../components/Footer";
import {
  Main,
  DivMain,
  SectionImg,
  SectionDetails,
  SectionDescription,
  SectionComments,
  SectionCommentUser,
  H2,
  DivFooter,
  DivContent,
  Aside,
  DivUser,
  DivComment,
  DivName,
  DivSuggestions,
  Ul,
  Overlay,
  DivComments,
  DivSection
} from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const VehicleDetails = () => {
  const isLoggedIn = false;
  const bgColor = randomColors();

  return (
    <>
      {isLoggedIn ? <HeaderAdmin bgColor={bgColor} /> : <Header />}

      <Main>
        <DivMain>
          <DivContent>
            <SectionImg>
              <div>
                <img src={car} alt="car" />
              </div>
            </SectionImg>
            <SectionDetails>
              <H2>
                Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200{" "}
              </H2>
              <DivFooter>
                <div>
                  <div>
                    <span>2013</span>
                    <span>0 KM</span>
                  </div>
                  <span>R$ 00,000.00</span>
                </div>

                <Button color={theme.colors.whiteFixed} width={100} height={38}>
                  Comprar
                </Button>
              </DivFooter>
            </SectionDetails>

            <SectionDescription>
              <H2>Descrição</H2>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </SectionDescription>
          </DivContent>
          <Aside>
            <div>
              <H2>Fotos</H2>
              <Swiper
                navigation={true}
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={30}
                className="mySwiper"
              >
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <SwiperSlide className="mySlide">
                    <img src={car} alt="car" key={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <DivUser bgColor={bgColor}>
              <div>SL</div>
              <span>Samuel Leao</span>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>

              <Button
                width={206}
                height={48}
                bgcolor={theme.colors.grey0}
                color={theme.colors.whiteFixed}
              >
                Ver todos anuncios
              </Button>
            </DivUser>
          </Aside>
        </DivMain>
        <SectionComments>
          <DivComments>
            <H2>Comentarios</H2>

            <Ul>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Comments
                  key={item}
                  username="Samuel Leão"
                  comment="Teste de comentario"
                />
              ))}
            </Ul>
          </DivComments>
          <Overlay />
        </SectionComments>

        <SectionCommentUser>
          <DivSection>
            <div>
              <DivName bgColor={bgColor}>
                <div>SL</div>
                <span>Samuel Leão</span>
              </DivName>

              <DivComment>
                <textarea placeholder="Digite seu comentario" />
                <Button
                  width={100}
                  height={38}
                  disabled={!isLoggedIn && true}
                  bgcolor={
                    isLoggedIn ? theme.colors.brand1 : theme.colors.grey4
                  }
                  onClick={() => console.log("habilitado")}
                >
                  Comentar
                </Button>
              </DivComment>
            </div>

            <DivSuggestions>
              <span>Gostei muito!</span>
              <span>Incrivel</span>
              <span>Recomendarei para meus amigos!</span>
            </DivSuggestions>
          </DivSection>
          <Overlay />
        </SectionCommentUser>
      </Main>
      <Footer />
    </>
  );
};

export default VehicleDetails;
