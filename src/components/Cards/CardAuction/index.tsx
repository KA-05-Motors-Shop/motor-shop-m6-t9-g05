import { Clock } from "phosphor-react";
import theme from "../../../styles/theme";
import Button from "../../Button";
import {
  Container,
  DivButtons,
  DivDetails,
  DivHour,
  DivInfos,
  DivImg,
  Published,
  Inactive,
  UserInfo,
} from "./styles";
import { useModal } from "../../../providers/Modal";
import { useNavigate } from "react-router-dom";
import { randomColors } from "../../../utils/randomColors";
import { initalLetters } from "../../../utils/initialLetters";

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
  published?: boolean;
}

interface CardProps {
  vehicle: VehicleProps;
  setVehicleId?: any;
  isUser?: boolean;
}

const CardAuction = ({ vehicle, setVehicleId, isUser = true }: CardProps) => {
  const { Switch } = useModal();
  const navigate = useNavigate();
  const bgColor = randomColors();
  const initials = initalLetters(vehicle.owner?.name);

  return (
    <Container>
      <DivImg onClick={() => navigate(`/vehicle/${vehicle.id}`)}>
        <img src={vehicle.cover_image} alt={vehicle.title} />
      </DivImg>
      <DivHour>
        <Clock size={26} weight="bold" />
        <span>01:58:00</span>
      </DivHour>
      <DivInfos>
        <h2> {vehicle.title} </h2>
        <p>{vehicle.description}</p>
      </DivInfos>
      <DivDetails>
        <div>
          <span>{vehicle.year}</span>
          <span>{vehicle.km} KM</span>
        </div>
        <span>R$ {vehicle.price}</span>
      </DivDetails>

      {isUser ? (
        <DivButtons>
          <UserInfo bgColor={bgColor}>
            <div>
              <span>{initials}</span>
            </div>
            <span>{vehicle.owner?.name}</span>
          </UserInfo>
        </DivButtons>
      ) : (
        <>
          <DivButtons>
            <Button
              width={130}
              height={38}
              color={theme.colors.whiteFixed}
              bgcolor="transparent"
              borderColor={theme.colors.whiteFixed}
              onClick={() => {
                setVehicleId(() => (vehicle.id ? vehicle.id : ""));
                Switch("ModalEditAd");
              }}
            >
              {" "}
              Editar{" "}
            </Button>
            <Button
              width={130}
              height={38}
              color={theme.colors.whiteFixed}
              bgcolor="transparent"
              borderColor={theme.colors.whiteFixed}
            >
              Ver como
            </Button>
            {vehicle.published ? (
              <Published>Publicado</Published>
            ) : (
              <Inactive>Inativo</Inactive>
            )}
          </DivButtons>
        </>
      )}
    </Container>
  );
};

export default CardAuction;
