import {
  Container,
  ContainerImage,
  Footer,
  UserInfo,
  DivTags,
  DivPrice,
  DivButtons,
  Published,
  Inactive,
} from "./styles";
import Car from "../../../assets/car1.png";
import Button from "../../Button";
import theme from "../../../styles/theme";
import { randomColors } from "../../../utils/randomColors";
import { useModal } from "../../../providers/Modal";
import { useNavigate } from "react-router-dom";
import { SetStateAction } from "react";

interface Comments {
  id: string;
  message: string;
  owner: {
    id: string;
    name: string;
  };
}

interface VehicleProps {
  id?: string;
  title: string;
  type_of_ad: string;
  year: number;
  km: number;
  price: number;
  description: string;
  type_of_vehicle: string;
  cover_image: string;
  gallery_image: string;
  gallery_image2?: string;
  gallery_image3?: string;
  gallery_image4?: string;
  gallery_image5?: string;
  gallery_image6?: string;
  owner?: {
    id?: string;
    name?: string;
  };
  comments?: Comments[];
  published: boolean | string;
}

interface CardProps {
  isUser?: boolean;
  vehicle: VehicleProps;
  setVehicleId?: any;
}

const CardShowcase = ({ isUser = true, vehicle, setVehicleId }: CardProps) => {
  const bgColor = randomColors();
  const { Switch } = useModal();
  const history = useNavigate();

  return (
    <Container>
      <ContainerImage onClick={() => history(`/vehicle/${vehicle.id}`)}>
        <img src={vehicle.cover_image} alt={vehicle.title} />
      </ContainerImage>
      <strong>{vehicle.title} </strong>
      <p>{vehicle.description}</p>
      {isUser ? (
        <>
          <UserInfo bgColor={bgColor}>
            <div>
              <span>SL</span>
            </div>
            <span>{vehicle.owner?.name}</span>
          </UserInfo>
          <Footer>
            <DivTags>
              <div>
                <span>{vehicle.km} KM</span>
              </div>
              <div>
                <span>{vehicle.year}</span>
              </div>
              <DivPrice>
                <span>R$ {vehicle.price}</span>
              </DivPrice>
            </DivTags>
          </Footer>
        </>
      ) : (
        <Footer>
          <DivTags>
            <div>
              <span>{vehicle.km} KM</span>
            </div>
            <div>
              <span>{vehicle.year}</span>
            </div>
            <DivPrice>
              <span>R$ {vehicle.price}</span>
            </DivPrice>
          </DivTags>
          <DivButtons>
            <Button
              width={80}
              height={38}
              color={theme.colors.grey1}
              bgcolor="transparent"
              borderColor={theme.colors.grey1}
              onClick={() => {
                setVehicleId(() => (vehicle.id ? vehicle.id : ""));
                Switch("ModalEditAd");
              }}
            >
              {" "}
              Editar{" "}
            </Button>
            <Button
              width={110}
              height={38}
              color={theme.colors.grey1}
              bgcolor="transparent"
              borderColor={theme.colors.grey1}
            >
              Ver como
            </Button>
            {vehicle.published ? (
              <Published>Publicado</Published>
            ) : (
              <Inactive>Inativo</Inactive>
            )}
          </DivButtons>
        </Footer>
      )}
    </Container>
  );
};

export default CardShowcase;
