import Header from "../../components/Header";
import HeaderAdmin from "../../components/HeaderAdmin";
import { randomColors } from "../../utils/randomColors";
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
import { useNavigate, useParams } from "react-router-dom";
import { AdProps, useAds } from "../../providers/Ads";
import { useEffect, useState } from "react";
import { User, useUser } from "../../providers/User";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { commentSchema } from "../../schemas/comment.schema";
import { useComment } from "../../providers/Comments";
import Loading from "../../components/Loading";
import { initalLetters } from "../../utils/initialLetters";

interface CommentProps {
  message: string;
}

const VehicleDetails = () => {
  const bgColor = randomColors();
  const { id } = useParams<{ id: string }>();
  const { userAuth, getUser } = useUser();
  const { getOneAd } = useAds();
  const { createComment } = useComment();
  const [user, setUser] = useState<User>();
  const [ad, setAd] = useState<AdProps>();

  const fetchUser = async () => {
    if (userAuth.userId) {
      const res = await getUser(userAuth.userId);
      setUser(res);
    }
  };

  const fetchAd = async () => {
    if (id) {
      const res = await getOneAd(id);
      setAd(res);
    }
  };

  const history = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CommentProps>({
    resolver: yupResolver(commentSchema),
  });

  useEffect(() => {
    fetchAd();
    fetchUser();
  }, []);

  if (!ad) {
    return <Loading bgColor={bgColor} />;
  }

  const onSubmit = async (data: CommentProps) => {
    await createComment(ad.id, data);
    await fetchAd();
    reset();
  };

  const initialsOwner = initalLetters(ad.owner.name);
  const initiaslUser = initalLetters(user?.name);
  const cel = ad.owner.cel.replace(/\D+/g, "");

  document.title = `Detalhes | ${ad.title}`;

  return (
    <>
      {userAuth.token ? <HeaderAdmin bgColor={bgColor} /> : <Header />}

      <Main>
        <DivMain>
          <DivContent>
            <SectionImg>
              <div>
                <img src={ad.cover_image} alt={ad.title} />
              </div>
            </SectionImg>
            <SectionDetails>
              <H2>{ad.title}</H2>
              <DivFooter>
                <div>
                  <div>
                    <span>{ad.year}</span>
                    <span>{ad.km} KM</span>
                  </div>
                  <span>R$ {ad.price}</span>
                </div>

                <a
                  href={`https://api.whatsapp.com/send?phone=55${cel}&text=Ola! Me interessei no seu veiculo`}
                  target="_blank"
                >
                  Comprar
                </a>
              </DivFooter>
            </SectionDetails>

            <SectionDescription>
              <H2>Descrição</H2>

              <p>{ad.description}</p>
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
                  <img src={ad.gallery_image} alt={ad.title} />
                </SwiperSlide>
                {ad.gallery_image2 && (
                  <SwiperSlide className="mySlide">
                    <img src={ad.gallery_image2} alt={ad.title} />
                  </SwiperSlide>
                )}
                {ad.gallery_image3 && (
                  <SwiperSlide className="mySlide">
                    <img src={ad.gallery_image3} alt={ad.title} />
                  </SwiperSlide>
                )}
                {ad.gallery_image4 && (
                  <SwiperSlide className="mySlide">
                    <img src={ad.gallery_image4} alt={ad.title} />
                  </SwiperSlide>
                )}
                {ad.gallery_image5 && (
                  <SwiperSlide className="mySlide">
                    <img src={ad.gallery_image5} alt={ad.title} />
                  </SwiperSlide>
                )}
                {ad.gallery_image6 && (
                  <SwiperSlide className="mySlide">
                    <img src={ad.gallery_image6} alt={ad.title} />
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
            <DivUser bgColor={bgColor}>
              <div>{initialsOwner}</div>
              <span>{ad.owner.name}</span>

              <p>{ad.owner.description}</p>

              <Button
                width={206}
                height={48}
                bgcolor={theme.colors.grey0}
                color={theme.colors.whiteFixed}
                onClick={() => history(`/profile/user/${ad.owner.id}`)}
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
              {ad.comments.map((comment) => (
                <Comments key={comment.id} {...comment} vehicle_id={ad.id} />
              ))}
            </Ul>
          </DivComments>
          <Overlay />
        </SectionComments>

        <SectionCommentUser>
          <DivSection>
            <div>
              <DivName bgColor={bgColor}>
                <div>{initiaslUser}</div>
                {user?.name ? (
                  <span>{user?.name}</span>
                ) : (
                  <span>Sem usuario</span>
                )}
              </DivName>

              <DivComment onSubmit={handleSubmit(onSubmit)}>
                <textarea
                  placeholder="Digite seu comentario"
                  {...register("message")}
                />
                <Button
                  width={100}
                  height={38}
                  disabled={!userAuth.token && true}
                  bgcolor={
                    userAuth.token ? theme.colors.brand1 : theme.colors.grey4
                  }
                  type="submit"
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
