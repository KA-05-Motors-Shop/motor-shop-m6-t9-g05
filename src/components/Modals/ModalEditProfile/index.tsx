import { X } from "phosphor-react";
import { useModal } from "../../../providers/Modal";
import theme from "../../../styles/theme";
import Button from "../../Button";
import { Input } from "../../Input";
import {
  Container,
  ContainerForm,
  ContainerText,
  DivFooter,
  DivInfos,
  DivTitle,
  Form,
  TextArea,
} from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useUser } from "../../../providers/User";
import { updateProfileSchema } from "../../../schemas/updateProfile.schema";

interface EditProfileProps {
  name?: string;
  email?: string;
  cel?: string;
  birth_date?: string;
  description?: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  cpf: string;
  cel: string;
  birth_date: string;
  description: string;
}

const EditProfile = (user: User) => {
  const { Switch, openEditProfileModal } = useModal();
  const { getUser, updateUser } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProfileProps>({
    resolver: yupResolver(updateProfileSchema),
  });

  useEffect(() => {
    getUser(user.id);
  }, []);

  const onSubmit = async (data: EditProfileProps) => {
    await updateUser(user.id, data);
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
            <label>Informações pessoais</label>
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
              mask="(99)99999-9999"
              defaultValue={user.cel}
              {...register("cel")}
              error={errors.cel?.message}
            />
            <Input
              label="Nascimento"
              width={100}
              placeholder="31/12/2000"
              mask="99/99/9999"
              defaultValue={user.birth_date}
              {...register("birth_date")}
              error={errors.birth_date?.message}
            />
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

            <DivFooter>
              <div>
                <Button
                  width={126}
                  height={45}
                  bgcolor={theme.colors.grey6}
                  color={theme.colors.grey0}
                  type="button"
                  onClick={() => Switch("ModalEditProfile")}
                >
                  Cancelar
                </Button>
                <Button
                  width={193}
                  height={45}
                  bgcolor={theme.colors.brand1}
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
