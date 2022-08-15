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
  DivSection,
} from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useParams } from "react-router-dom";
import { useAds } from "../../providers/Ads";

const VehicleDetails = () => {
  const isLoggedIn = false;
  const bgColor = randomColors();
  const { id } = useParams<{ id: string }>();
  const { ads } = useAds();

  const vehicle = ads.find((ad) => ad.id === id);

  if (!vehicle) return <h1>teste</h1>;

  return (
    <>
      {isLoggedIn ? <HeaderAdmin bgColor={bgColor} /> : <Header />}

      <Main>
        <DivMain>
          <DivContent>
            <SectionImg>
              <div>
                <img src={vehicle.cover_image} alt={vehicle.title} />
              </div>
            </SectionImg>
            <SectionDetails>
              <H2>{vehicle.title}</H2>
              <DivFooter>
                <div>
                  <div>
                    <span>{vehicle.year}</span>
                    <span>{vehicle.km} KM</span>
                  </div>
                  <span>R$ {vehicle.price}</span>
                </div>

                <Button color={theme.colors.whiteFixed} width={100} height={38}>
                  Comprar
                </Button>
              </DivFooter>
            </SectionDetails>

            <SectionDescription>
              <H2>Descrição</H2>

              <p>{vehicle.description}</p>
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
                <SwiperSlide className="mySlide">
                  <img src={vehicle.gallery_image} alt="car" />
                  <img src={vehicle.gallery_image2} alt="car" />
                  <img src={vehicle.gallery_image3} alt="car" />
                  <img src={vehicle.gallery_image4} alt="car" />
                  <img src={vehicle.gallery_image5} alt="car" />
                  <img src={vehicle.gallery_image6} alt="car" />
                </SwiperSlide>
              </Swiper>
            </div>
            <DivUser bgColor={bgColor}>
              <div>SL</div>
              <span>{vehicle.owner.name}</span>

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
              {vehicle.comments.map((comment) => (
                <Comments
                  key={comment.id}
                  username={comment.owner.name}
                  comment={comment.message}
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
                <span>{vehicle.owner.name}</span>
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
