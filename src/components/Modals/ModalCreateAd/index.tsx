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
  Error,
} from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { createAdSchema } from "../../../schemas/createAd.schema";
import { useEffect, useState } from "react";
import { useAds } from "../../../providers/Ads";

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
  const [count, setCount] = useState(2);
  const [extraInputs, setShowExtraInputs] = useState<number[]>([]);
  const { createAd } = useAds();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    setValue,
    watch,
  } = useForm<CreateAdProps>({
    resolver: yupResolver(createAdSchema),
    mode: "onBlur",
  });

  const renderInputs = () => {
    setCount(count + 1);

    if (count <= 6 && extraInputs.length <= 6) {
      setShowExtraInputs((prev) => [...prev, count]);
    }
  };

  const onSubmit = async (data: CreateAdProps) => {
    await createAd(data);
    reset();
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
            <label>
              Tipo de anuncio{" "}
              {!!errors.type_of_ad && (
                <Error> - {errors.type_of_ad?.message}</Error>
              )}{" "}
            </label>
            <div>
              <Button
                width={235}
                height={45}
                bgcolor={
                  watch("type_of_ad") === "Venda"
                    ? theme.colors.brand3
                    : theme.colors.brand1
                }
                type="button"
                onClick={() =>
                  setValue("type_of_ad", "Venda", {
                    shouldValidate: true,
                    shouldDirty: true,
                  })
                }
              >
                Venda
              </Button>
              <Button
                width={235}
                height={45}
                bgcolor={
                  watch("type_of_ad") === "Leilão"
                    ? theme.colors.grey4
                    : theme.colors.whiteFixed
                }
                color={theme.colors.grey0}
                borderColor={theme.colors.grey4}
                type="button"
                onClick={() =>
                  setValue("type_of_ad", "Leilão", {
                    shouldValidate: true,
                    shouldDirty: true,
                  })
                }
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
                  <Error> - {errors.description?.message}</Error>
                )}{" "}
              </label>
              <TextArea
                placeholder="Digitar descrição"
                {...register("description")}
              />
            </ContainerText>
            <DivTypeVehicle>
              <label>
                Tipo de Veiculo{" "}
                {!!errors.type_of_vehicle && (
                  <Error> - {errors.type_of_vehicle?.message}</Error>
                )}{" "}
              </label>
              <div>
                <Button
                  width={235}
                  height={45}
                  type="button"
                  bgcolor={
                    watch("type_of_vehicle") === "Carro"
                      ? theme.colors.brand3
                      : theme.colors.brand1
                  }
                  onClick={() =>
                    setValue("type_of_vehicle", "Carro", {
                      shouldValidate: true,
                      shouldDirty: true,
                    })
                  }
                >
                  Carro
                </Button>
                <Button
                  width={235}
                  height={45}
                  bgcolor={
                    watch("type_of_vehicle") === "Moto"
                      ? theme.colors.grey4
                      : theme.colors.whiteFixed
                  }
                  color={theme.colors.grey0}
                  borderColor={theme.colors.grey4}
                  type="button"
                  onClick={() =>
                    setValue("type_of_vehicle", "Moto", {
                      shouldValidate: true,
                      shouldDirty: true,
                    })
                  }
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
                  bgcolor={isValid ? theme.colors.brand2 : theme.colors.brand3}
                  disabled={isValid ? false : true}
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
