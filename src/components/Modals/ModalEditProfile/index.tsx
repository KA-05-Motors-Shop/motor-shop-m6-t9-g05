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
import { getOnlyPastValues } from "../../../utils/onlyPastValues";
import { useAds } from "../../../providers/Ads";
import { useUser } from "../../../providers/User";
import { updateProfileSchema } from "../../../schemas/updateProfile.schema";

interface EditProfileProps {
  name?: string;
  email?: string;
  cel?: string;
  birth_date?: string;
  description?: string;
  account_type?: string;
  password?: string;
  confirm_password?: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  cpf: string;
  cel: string;
  birth_date: string;
  description: string;
  account_type: string;
}

const EditProfile = (user: User) => {
  console.log(user);

  const { Switch, openEditProfileModal } = useModal();
  // const [count, setCount] = useState(2);
  // const [extraInputs, setShowExtraInputs] = useState<number[]>([]);
  // const { getOneAd, ad, updateAd } = useAds();
  const { getUser, updateUser } = useUser();

  const [isShown, setIsSHown] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<EditProfileProps>({
    resolver: yupResolver(updateProfileSchema),
  });

  // const renderInputs = () => {
  //   setCount(count + 1);

  //   if (count <= 6 && extraInputs.length <= 6) {
  //     setShowExtraInputs((prev) => [...prev, count]);
  //   }
  // };

  useEffect(() => {
    getUser(user.id);
  }, []);

  // if (!ad) {
  //   return <h1>teste</h1>;
  // }

  const onSubmit = async (data: EditProfileProps) => {
    // const newData = getOnlyPastValues(data);
    await updateUser(user.id, data);
  };

  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };

  return (
    <Container isOpen={openEditProfileModal}>
      <ContainerForm>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <DivTitle>
            <span>Editar perfil</span>
            <button onClick={() => Switch("ModalEditProfile")} type="button">
              <X size={20} weight="bold" />
            </button>
          </DivTitle>

          <DivInfos>
            <label>Informações do usuário</label>
            <Input
              label="Nome"
              width={100}
              placeholder="Digitar nome"
              defaultValue={user.name}
              {...register("name")}
              error={errors.name?.message}
            />
            <Input
              label="E-mail"
              width={100}
              placeholder="Digitar e-mail"
              defaultValue={user.email}
              {...register("email")}
              error={errors.email?.message}
            />
            <Details>
              <Input
                label="CPF"
                width={100}
                defaultValue={user.cpf}
                disabled={true}
              />
              <Input
                label="Celular"
                width={100}
                placeholder="Digitar celular"
                defaultValue={user.cel}
                {...register("cel")}
                error={errors.cel?.message}
              />
              <Input
                label="Nascimento"
                width={100}
                placeholder="0"
                defaultValue={user.birth_date}
                {...register("birth_date")}
                error={errors.birth_date?.message}
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
                defaultValue={user.description}
                {...register("description")}
              />
            </ContainerText>
            <DivTypeVehicle>
              <label>Tipo de Conta</label>
              <div>
                <Button
                  width={235}
                  height={45}
                  type="button"
                  onClick={() =>
                    setValue("account_type", "Comprador", {
                      shouldValidate: true,
                      shouldDirty: true,
                    })
                  }
                >
                  Comprador
                </Button>
                <Button
                  width={235}
                  height={45}
                  bgcolor={theme.colors.whiteFixed}
                  color={theme.colors.grey0}
                  borderColor={theme.colors.grey4}
                  type="button"
                  onClick={() =>
                    setValue("account_type", "Anunciante", {
                      shouldValidate: true,
                      shouldDirty: true,
                    })
                  }
                >
                  Anunciante
                </Button>
              </div>
            </DivTypeVehicle>

            <Details>
              <Input
                label="Senha"
                width={100}
                type={isShown ? "text" : "password"}
                placeholder="Digitar senha"
                {...register("password")}
                error={errors.password?.message}
              />
              <Input
                label="Confirmar senha"
                width={100}
                type={isShown ? "text" : "password"}
                placeholder="Confirmar senha"
                {...register("confirm_password")}
                error={errors.confirm_password?.message}
              />
            </Details>
            <div className="checkbox-container">
              <label htmlFor="checkbox">Mostrar senha</label>
              <input
                id="checkbox"
                type="checkbox"
                checked={isShown}
                onChange={togglePassword}
              />
            </div>

            <DivFooter>
              <div>
                <Button
                  width={262}
                  height={45}
                  bgcolor={theme.colors.grey6}
                  color={theme.colors.grey0}
                  type="button"
                  onClick={() => {
                    Switch("ModalEditProfile");
                    Switch("ModalDelete");
                  }}
                >
                  Excluir usuário
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

export default EditProfile;
