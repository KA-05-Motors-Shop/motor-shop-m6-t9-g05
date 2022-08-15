import { Clock } from "phosphor-react";
import theme from "../../../styles/theme";
import Button from "../../Button";
import car from "../../../assets/Photo.png";
import {
  Container,
  DivButtons,
  DivDetails,
  DivHour,
  DivInfos,
  DivImg,
} from "./styles";

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
}

interface CardProps {
  vehicle: VehicleProps;
}

const CardAuction = ({ vehicle }: CardProps) => {
  return (
    <Container>
      <DivImg>
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

      <DivButtons>
        <Button
          width={130}
          height={38}
          color={theme.colors.whiteFixed}
          bgcolor="transparent"
          borderColor={theme.colors.whiteFixed}
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
      </DivButtons>
    </Container>
  );
};

export default CardAuction;
