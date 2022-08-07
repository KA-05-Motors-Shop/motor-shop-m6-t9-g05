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

const CardAuction = () => {
  return (
    <Container>
      <DivImg>
        <img src={car} alt="" />
      </DivImg>
      <DivHour>
        <Clock size={26} weight="bold" />
        <span>01:58:00</span>
      </DivHour>
      <DivInfos>
        <h2>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem...
        </p>
      </DivInfos>
      <DivDetails>
        <div>
          <span>2013</span>
          <span>0 KM</span>
        </div>
        <span>R$ 00.000,00</span>
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
