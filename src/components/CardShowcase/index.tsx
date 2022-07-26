import { Container, ContainerImage, Footer, UserInfo } from "./styles";
import Car from "../../assets/car1.png";

export const CardShowcase = () => {
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

      {/* UserInfo precisa ser componentizado */}
      <UserInfo>
        <div>
          <span>SL</span>
        </div>
        <span>Samuel Leão</span>
      </UserInfo>
      <Footer>
        <div className="tags">
          <div>
            <span>0 KM</span>
          </div>
          <div>
            <span>2019</span>
          </div>
        </div>
        <div className="price">
          <span>R$ 00.000,00</span>
        </div>
      </Footer>
    </Container>
  );
};
