import {
  Container,
  ContainerImage,
  Footer,
  UserInfo,
  DivTags,
  DivPrice,
  DivButtons,
} from "./styles";
import Car from "../../../assets/car1.png";
import Button from "../../Button";
import theme from "../../../styles/theme";

interface CardProps {
  isUser?: boolean;
}

const CardShowcase = ({ isUser = true }: CardProps) => {
  return (
    <Container>
      <ContainerImage>
        <img src={Car} alt="" />
      </ContainerImage>
      <strong>Product title stays here - max 1 line </strong>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem...
      </p>
      {isUser ? (
        <>
          <UserInfo>
            <div>
              <span>SL</span>
            </div>
            <span>Samuel Leão</span>
          </UserInfo>
          <Footer>
            <DivTags>
              <div>
                <span>0 KM</span>
              </div>
              <div>
                <span>2019</span>
              </div>
              <DivPrice>
                <span>R$ 00.000,00</span>
              </DivPrice>
            </DivTags>
          </Footer>
        </>
      ) : (
        <Footer>
          <DivTags>
            <div>
              <span>0 KM</span>
            </div>
            <div>
              <span>2019</span>
            </div>
            <DivPrice>
              <span>R$ 00.000,00</span>
            </DivPrice>
          </DivTags>
          <DivButtons>
            <Button
              width={80}
              height={38}
              color={theme.colors.grey1}
              bgcolor="transparent"
              borderColor={theme.colors.grey1}
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
          </DivButtons>
        </Footer>
      )}
    </Container>
  );
};

export default CardShowcase;
