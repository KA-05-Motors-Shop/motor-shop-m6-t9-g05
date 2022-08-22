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
  DivPublished,
} from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { updateAdSchema } from "../../../schemas/updateAd.schema";
import { useAds } from "../../../providers/Ads";
import EmptyList from "../../EmptyList";
import { useUser } from "../../../providers/User";

interface EditAdProps {
  title?: string;
  type_of_ad?: string;
  year?: number;
  km?: number;
  price?: number;
  description?: string;
  type_of_vehicle?: string;
  cover_image?: string;
  gallery_image?: string;
  gallery_image2?: string;
  gallery_image3?: string;
  gallery_image4?: string;
  gallery_image5?: string;
  gallery_image6?: string;
  published?: boolean;
}

interface Props {
  vehicle_id: string;
}

const EditAd = ({ vehicle_id }: Props) => {
  const { Switch, openEditAdModal } = useModal();
  const [count, setCount] = useState(2);
  const [extraInputs, setShowExtraInputs] = useState<number[]>([]);
  const { updateAd } = useAds();
  const { user } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<EditAdProps>({
    resolver: yupResolver(updateAdSchema),
  });

  const renderInputs = () => {
    setCount(count + 1);

    if (count <= 6 && extraInputs.length <= 6) {
      setShowExtraInputs((prev) => [...prev, count]);
    }
  };

  const ad = user?.vehicles.find((vehicle) => vehicle.id === vehicle_id);

  if (!ad) {
    return <EmptyList />;
  }

  const onSubmit = async (data: EditAdProps) => {
    await updateAd(ad.id, data);
    Switch("ModalEditAd");
  };

  return (
    <Container isOpen={openEditAdModal}>
      <ContainerForm>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <DivTitle>
            <span>Criar anuncio</span>
            <button onClick={() => Switch("ModalEditAd")} type="button">
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
                bgcolor={theme.colors.whiteFixed}
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
              defaultValue={ad.title}
              {...register("title")}
              error={errors.title?.message}
            />
            <Details>
              <Input
                label="Ano"
                width={100}
                placeholder="Digitar ano"
                type="number"
                defaultValue={ad.year}
                {...register("year")}
                error={errors.year?.message}
              />
              <Input
                label="Quilometragem"
                width={100}
                placeholder="0"
                type="number"
                defaultValue={ad.km}
                {...register("km")}
                error={errors.km?.message}
              />
              <Input
                label="Preço"
                width={100}
                placeholder="Digitar preço"
                type="number"
                defaultValue={ad.price}
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
                defaultValue={ad.description}
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
                  bgcolor={theme.colors.whiteFixed}
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
            <DivPublished>
              <label>Publicado</label>
              <div>
                <Button
                  width={235}
                  height={45}
                  type="button"
                  bgcolor={theme.colors.whiteFixed}
                  color={theme.colors.grey0}
                  borderColor={theme.colors.grey4}
                  onClick={() =>
                    setValue("published", true, {
                      shouldValidate: true,
                      shouldDirty: true,
                    })
                  }
                >
                  Sim
                </Button>
                <Button
                  width={235}
                  height={45}
                  type="button"
                  onClick={() =>
                    setValue("published", false, {
                      shouldValidate: true,
                      shouldDirty: true,
                    })
                  }
                >
                  Não
                </Button>
              </div>
            </DivPublished>
            <Input
              label="Imagem de capa"
              width={100}
              placeholder="Inserir URL da imagem"
              defaultValue={ad.cover_image}
              {...register("cover_image")}
              error={errors.cover_image?.message}
            />
            <Input
              label="1° Imagem da galeria"
              width={100}
              placeholder="Inserir URL da imagem"
              defaultValue={ad.gallery_image}
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
                  width={262}
                  height={45}
                  bgcolor={theme.colors.grey6}
                  color={theme.colors.grey0}
                  type="button"
                  onClick={() => {
                    Switch("ModalEditAd");
                    Switch("ModalDelete");
                  }}
                >
                  Excluir anuncio
                </Button>
                <Button
                  width={193}
                  height={45}
                  bgcolor={theme.colors.brand3}
                  type="submit"
                >
                  Salvar alterações
                </Button>
              </div>
            </DivFooter>
          </DivInfos>
        </Form>
      </ContainerForm>
    </Container>
  );
};

export default EditAd;
