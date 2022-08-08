import { X } from "phosphor-react";
import { useModal } from "../../../providers/Modal";
import Button from "../../Button";

import { Container, Content, Div, DivMessage, DivButton } from "./styles";

interface ModalProps {
  modalLogin?: boolean;
}

const ModalSucess = ({ modalLogin = false }: ModalProps) => {
  const { Switch } = useModal();

  return (
    <>
      {modalLogin ? (
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
              <p>
                Agora você poderá ver seus negócios crescendo em grande escala
              </p>
            </DivMessage>
            <DivButton>
              <Button
                width={140}
                height={38}
                onClick={() => console.log("/login")}
              >
                Ir para o login
              </Button>
            </DivButton>
          </Content>
        </Container>
      ) : (
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
              <p>
                Agora você poderá ver seus negócios crescendo em grande escala
              </p>
            </DivMessage>
          </Content>
        </Container>
      )}
    </>
  );
};

export default ModalSucess;
