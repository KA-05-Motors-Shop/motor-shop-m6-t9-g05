import { X } from "phosphor-react";
import theme from "../../../styles/theme";
import Button from "../../Button";
import { Input } from "../../Input";
import {
  Container,
  ContainerForm,
  DivTitle,
  Form,
  TextArea,
  ContainerText,
  DivTypeAd,
  DivTypeVehicle,
  DivInfos,
  Details,
  DivFooter,
  DivButton
} from "./styles";

const CreateAd = () => {
  return (
    <Container>
      <ContainerForm>
        <Form>
          <DivTitle>
            <span>Criar anuncio</span>
            <button>
              <X size={20} weight="bold" />
            </button>
          </DivTitle>
          <DivTypeAd>
            <label>Tipo de anuncio</label>
            <div>
              <Button width={95} height={45}>
                Venda
              </Button>
              <Button
                width={95}
                height={45}
                bgcolor={theme.colors.whiteFixed}
                color={theme.colors.grey0}
                borderColor={theme.colors.grey4}
              >
                Leilão
              </Button>
            </div>
          </DivTypeAd>
          <DivInfos>
            <label>Informações do veiculo</label>
            <Input label="Titulo" width={100} placeholder="Digitar titulo" />
            <Details>
              <Input
                label="Ano"
                width={100}
                placeholder="Digitar ano"
                type="number"
              />
              <Input
                label="Quilometragem"
                width={100}
                placeholder="0"
                type="number"
              />
              <Input
                label="Preço"
                width={100}
                placeholder="Digitar preço"
                type="number"
              />
            </Details>
            <ContainerText>
              <label>Descrição</label>
              <TextArea placeholder="Digitar descrição" />
            </ContainerText>
            <DivTypeVehicle>
              <label>Tipo de Veiculo</label>
              <div>
                <Button width={95} height={45}>
                  Carro
                </Button>
                <Button
                  width={95}
                  height={45}
                  bgcolor={theme.colors.whiteFixed}
                  color={theme.colors.grey0}
                  borderColor={theme.colors.grey4}
                >
                  Moto
                </Button>
              </div>
            </DivTypeVehicle>
            <Input
              label="Imagem de capa"
              width={100}
              placeholder="Inserir URL da imagem"
            />
            <Input
              label="1° Imagem da galeria"
              width={100}
              placeholder="Inserir URL da imagem"
            />
            <DivButton>
              <Button
                bgcolor={theme.colors.brand4}
                color={theme.colors.brand1}
                height={40}
                width={100}
                type='button'
              >
                Adicionar campo para imagem da galeria
              </Button>
            </DivButton>

            <DivFooter>
              <div>
                <Button
                  width={50}
                  height={45}
                  bgcolor={theme.colors.grey6}
                  color={theme.colors.grey0}
                  type='button'
                >
                  Cancelar
                </Button>
                <Button width={95} height={45} bgcolor={theme.colors.brand3} type='submit'>
                  Criar anuncio
                </Button>
              </div>
            </DivFooter>
          </DivInfos>
        </Form>
      </ContainerForm>
    </Container>
  );
};

export default CreateAd;
