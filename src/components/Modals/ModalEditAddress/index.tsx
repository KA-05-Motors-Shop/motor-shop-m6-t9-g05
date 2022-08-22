import { X } from "phosphor-react";
import { useModal } from "../../../providers/Modal";
import theme from "../../../styles/theme";
import Button from "../../Button";
import { Input } from "../../Input";
import {
  Container,
  ContainerForm,
  Details,
  DivFooter,
  DivInfos,
  DivTitle,
  Form,
} from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useUser } from "../../../providers/User";
import { updateAddressSchema } from "../../../schemas/updateAddress.schema";
import { useCep } from "../../../providers/CEP";

interface UpdateAddressProps {
  cep?: string;
  street?: string;
  complement?: string;
  city?: string;
  state?: string;
  number?: string;
}

interface Address {
  cep: string;
  street: string;
  complement: string;
  city: string;
  state: string;
  number: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  cpf: string;
  cel: string;
  birth_date: string;
  description: string;
  address: Address;
}

const EditAddress = (user: User) => {
  const { Switch, openEditAddressModal } = useModal();
  const { updateAddress } = useUser();
  const { getAddress, address } = useCep();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<UpdateAddressProps>({
    resolver: yupResolver(updateAddressSchema),
  });

  const onSubmit = async (data: UpdateAddressProps) => {
    await updateAddress(user.id, data);
    Switch("ModalEditAddress");
  };

  const setValues = () => {
    setValue("street", address.logradouro, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("city", address.localidade, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("state", address.uf, {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  return (
    <Container isOpen={openEditAddressModal}>
      <ContainerForm>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <DivTitle>
            <span>Editar endereço</span>
            <button onClick={() => Switch("ModalEditAddress")} type="button">
              <X size={20} weight="bold" />
            </button>
          </DivTitle>

          <DivInfos>
            <label>Informações de endereço</label>
            <Input
              label="CEP"
              width={100}
              mask="99999-999"
              placeholder="Pressione enter para preencher automaticamente"
              defaultValue={user.address.cep}
              {...register("cep")}
              error={errors.cep?.message}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  getAddress(e.target.value);
                  setValues();
                }
              }}
            />
            <Details>
              <Input
                label="Estado"
                width={100}
                placeholder="Digitar estado"
                defaultValue={address.uf}
                {...register("state")}
                error={errors.state?.message}
              />
              <Input
                label="Cidade"
                width={100}
                placeholder="Digitar cidade"
                defaultValue={address.localidade}
                {...register("city")}
                error={errors.city?.message}
              />
            </Details>
            <Input
              label="Rua"
              width={100}
              placeholder="Digitar rua"
              defaultValue={address.logradouro}
              {...register("street")}
              error={errors.street?.message}
            />
            <Details>
              <Input
                label="Número"
                width={100}
                placeholder="Digitar número"
                defaultValue={user.address.number}
                {...register("number")}
                error={errors.number?.message}
              />
              <Input
                label="Complemento"
                width={100}
                placeholder="Digitar complemento"
                defaultValue={user.address.complement}
                {...register("complement")}
                error={errors.complement?.message}
              />
            </Details>
            <DivFooter>
              <div>
                <Button
                  width={126}
                  height={45}
                  bgcolor={theme.colors.grey6}
                  color={theme.colors.grey0}
                  type="button"
                  onClick={() => Switch("ModalEditAddress")}
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

export default EditAddress;
