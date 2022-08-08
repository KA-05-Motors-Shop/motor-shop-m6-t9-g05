import { X } from "phosphor-react";
import { useModal } from "../../../providers/Modal";

import { Container, Content, Div, DivMessage } from "./styles";

const ModalSucess = () => {
  const { Switch } = useModal();

  return (
    <Container>
      <Content>
        <Div>
          <span>Sucesso!</span>
          <button onClick={() => Switch("ModalSucess")}>
            <X size={20} weight="bold" />
          </button>
        </Div>
        <DivMessage>
          <p>Seu anuncio foi criado com sucesso!</p>
          <p>Agora você poderá ver seus negócios crescendo em grande escala</p>
        </DivMessage>
      </Content>
    </Container>
  );
};

export default ModalSucess;
