import { X } from "phosphor-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../../providers/Modal";
import Button from "../../Button";

import { Container, Content, Div, DivMessage, DivButton } from "./styles";

interface ModalProps {
  modalLogin?: boolean;
}

const ModalSucess = ({ modalLogin }: ModalProps) => {
  const { Switch, openSucessModal } = useModal();

  const history = useNavigate();

  useEffect(() => {
    document.body.style.overflowY = openSucessModal ? "hidden" : "auto";
  }, [openSucessModal]);

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
              <p>Sua conta foi criada com sucesso!</p>
              <p>
                Agora você poderá ver seus negócios crescendo em grande escala
              </p>
            </DivMessage>
            <DivButton>
              <Button width={140} height={38} onClick={() => {
                 history("/login")
                 Switch("ModalSucess")
              }}>
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
