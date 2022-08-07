import { X } from "phosphor-react";
import { useModal } from "../../../providers/Modal";
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
  DivButton,
  DivExtraInputs,
} from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { createAdSchema } from "../../../schemas/createAd.schema";
import { useEffect, useState } from "react";

interface CreateAdProps {
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
}


const CreateAd = () => {
  const { Switch, openCreateAdModal } = useModal();
  const [typeAd, setTypeAd] = useState<string>("");
  const [typeVehicle, setTypeVehicle] = useState<string>("");
  const [count, setCount] = useState(2);
  const [extraInputs, setShowExtraInputs] = useState<number[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateAdProps>({
    resolver: yupResolver(createAdSchema),
  });

  const renderInputs = () => {
    setCount(count + 1);

    if (count <= 6 && extraInputs.length <= 6) {
      setShowExtraInputs((prev) => [...prev, count]);
    }
  };

  const onSubmit = (data: CreateAdProps) => {
    data.type_of_ad = typeAd;
    data.type_of_vehicle = typeVehicle;
    console.log(data);
  };
  
  return (
    <Container isOpen={openCreateAdModal}>
      <ContainerForm>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <DivTitle>
            <span>Criar anuncio</span>
            <button onClick={() => Switch("ModalCreateAd")} type="button">
              <X size={20} weight="bold" />
            </button>
          </DivTitle>
          <DivTypeAd>
            <label>Tipo de anuncio</label>
            <div>
              <Button
                width={235}
                height={45}
                type="button"
                onClick={() => setTypeAd("Venda")}
              >
                Venda
              </Button>
              <Button
                width={235}
                height={45}
                bgcolor={theme.colors.whiteFixed}
                color={theme.colors.grey0}
                borderColor={theme.colors.grey4}
                type="button"
                onClick={() => setTypeAd("Leilão")}
              >
                Leilão
              </Button>
            </div>
          </DivTypeAd>
          <DivInfos>
            <label>Informações do veiculo</label>
            <Input
              label="Titulo"
              width={100}
              placeholder="Digitar titulo"
              {...register("title")}
              error={errors.title?.message}
            />
            <Details>
              <Input
                label="Ano"
                width={100}
                placeholder="Digitar ano"
                type="number"
                {...register("year")}
                error={errors.year?.message}
              />
              <Input
                label="Quilometragem"
                width={100}
                placeholder="0"
                type="number"
                {...register("km")}
                error={errors.km?.message}
              />
              <Input
                label="Preço"
                width={100}
                placeholder="Digitar preço"
                type="number"
                {...register("price")}
                error={errors.price?.message}
              />
            </Details>
            <ContainerText>
              <label>
                Descrição{" "}
                {!!errors.description && (
                  <span> - {errors.description?.message}</span>
                )}{" "}
              </label>
              <TextArea
                placeholder="Digitar descrição"
                {...register("description")}
              />
            </ContainerText>
            <DivTypeVehicle>
              <label>Tipo de Veiculo</label>
              <div>
                <Button
                  width={235}
                  height={45}
                  type="button"
                  onClick={() => setTypeVehicle("Carro")}
                >
                  Carro
                </Button>
                <Button
                  width={235}
                  height={45}
                  bgcolor={theme.colors.whiteFixed}
                  color={theme.colors.grey0}
                  borderColor={theme.colors.grey4}
                  type="button"
                  onClick={() => setTypeVehicle("Moto")}
                >
                  Moto
                </Button>
              </div>
            </DivTypeVehicle>
            <Input
              label="Imagem de capa"
              width={100}
              placeholder="Inserir URL da imagem"
              {...register("cover_image")}
              error={errors.cover_image?.message}
            />
            <Input
              label="1° Imagem da galeria"
              width={100}
              placeholder="Inserir URL da imagem"
              {...register("gallery_image")}
              error={errors.gallery_image?.message}
            />
            <DivExtraInputs>
              {extraInputs.map((num) => (
                <Input
                  key={num}
                  label={`${num}° Imagem da galeria`}
                  width={100}
                  placeholder="Inserir URL da imagem"
                  {...register(`gallery_image${num}` as "gallery_image2")}
                  error={errors.gallery_image2?.message}
                />
              ))}
            </DivExtraInputs>
            <DivButton>
              <Button
                bgcolor={theme.colors.brand4}
                color={theme.colors.brand1}
                height={40}
                type="button"
                onClick={renderInputs}
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
                  type="button"
                  onClick={() => reset()}
                >
                  Cancelar
                </Button>
                <Button
                  width={95}
                  height={45}
                  bgcolor={theme.colors.brand3}
                  type="submit"
                >
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
