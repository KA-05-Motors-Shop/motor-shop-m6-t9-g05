import { X } from "phosphor-react";
import { useModal } from "../../../providers/Modal";
import theme from "../../../styles/theme";
import Button from "../../Button";

import { Container, Content, Div, DivMessage, DivButton } from "./styles";

const ModalDelete = () => {
  const { Switch } = useModal();

  return (
    <Container>
      <Content>
        <Div>
          <span>Excluir anuncio!</span>
          <button onClick={() => Switch("ModalDelete")}>
            <X size={20} weight="bold" />
          </button>
        </Div>
        <DivMessage>
          <p>Tem certeza que deseja remover esse anuncio ?</p>
          <p>
            Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
            conta e removerá seus dados de nossos servidores.
          </p>
        </DivMessage>
        <DivButton>
          <Button
            bgcolor={theme.colors.grey6}
            height={48}
            color={theme.colors.grey2}
            onClick={() => Switch("ModalDelete")}
          >
            Cancelar
          </Button>
          <Button
            bgcolor={theme.colors.alert2}
            height={48}
            color={theme.colors.alert1}
          >
            Sim, excluir anuncio
          </Button>
        </DivButton>
      </Content>
    </Container>
  );
};

export default ModalDelete;
