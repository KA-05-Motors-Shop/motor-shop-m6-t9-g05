import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Input } from "../../components/Input";
import { useCep } from "../../providers/CEP";
import { registerSchema } from "../../schemas/register.schema";
import theme from "../../styles/theme";
import {
  TextArea,
  ContainerText,
  Container,
  DivAddress,
  DivButton,
  DivForm,
  DivInfos,
  DivNumber,
  DivPassword,
  DivState,
  DivTitle,
  Form,
  Div,
} from "./styles";

interface RegisterProps {
  name: string;
  email: string;
  cpf: string;
  cel: string;
  birth_date: string;
  description: string;
  address: Address;
  account_type: string;
  password: string;
  confirm_password?: string;
}

interface Address {
  cep: string;
  street: string;
  complement: string;
  city: string;
  state: string;
  number: string;
}

const Register = () => {
  const { getAddress, address } = useCep();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<RegisterProps>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data: RegisterProps) => {
    delete data.confirm_password;

    console.log(data);
  };

  return (
    <>
      <Header />
      <Container>
        <DivForm>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <DivTitle>
              <h2>Cadastro</h2>
            </DivTitle>

            <DivInfos>
              <label>Informações pessoais</label>
              <Input
                label="Nome"
                placeholder="Ex: Samuel Leão"
                {...register("name")}
                error={errors.name?.message}
              />
              <Input
                label="Email"
                placeholder="Ex: samu@mail.com"
                {...register("email")}
                error={errors.email?.message}
              />
              <Input
                label="CPF"
                mask="999.999.999-99"
                placeholder="000.000.000-00"
                register={register("cpf")}
                error={errors.cpf?.message}
              />
              <Input
                label="Telefone"
                mask="(99) 99999-9999"
                placeholder="(00) 00000-0000"
                register={register("cel")}
                error={errors.cel?.message}
              />
              <Input
                label="Data de nascimento"
                mask="99/99/9999"
                placeholder="00/00/0000"
                register={register("birth_date")}
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
                  {...register("description")}
                />
              </ContainerText>
            </DivInfos>

            <DivAddress>
              <label>Informações de endereço</label>
              <Input
                label="CEP"
                error={errors.address?.cep?.message}
                mask="99999-999"
                placeholder="Pressione enter para preencher automaticamente"
                register={register("address.cep")}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    getAddress(e.target.value);
                  }
                }}
              />
              <DivState>
                <Input
                  label="Estado"
                  placeholder="Digite o estado"
                  {...register("address.state")}
                  value={address.uf}
                  error={errors.address?.state?.message}
                />
                <Input
                  label="Cidade"
                  placeholder="Digite a cidade"
                  value={address.localidade}
                  {...register("address.city")}
                  error={errors.address?.city?.message}
                />
              </DivState>
              <Input
                label="Rua"
                placeholder="Digite a rua"
                value={address.logradouro}
                {...register("address.street")}
                error={errors.address?.street?.message}
              />

              <DivNumber>
                <Input
                  label="Número"
                  placeholder="Digiar numero"
                  {...register("address.number")}
                  error={errors.address?.number?.message}
                />
                <Input
                  label="Complemento"
                  placeholder="Digitar complemento"
                  {...register("address.complement")}
                  error={errors.address?.complement?.message}
                />
              </DivNumber>
            </DivAddress>

            <DivButton>
              <label>
                Tipo de conta{" "}
                {!!errors.account_type && (
                  <span> - {errors.account_type?.message}</span>
                )}{" "}
              </label>
              <div>
                <Button
                  height={38}
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
                  height={38}
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
            </DivButton>

            <DivPassword>
              <Input
                label="Senha"
                type="password"
                placeholder="Digitar senha"
                {...register("password")}
                error={errors.password?.message}
              />
              <Input
                label="Confirmar senha"
                type="password"
                placeholder="Digitar senha"
                {...register("confirm_password")}
                error={errors.confirm_password?.message}
              />
            </DivPassword>

            <Div>
              <Button height={38} type="submit">
                Finalizar cadastro
              </Button>
            </Div>
          </Form>
        </DivForm>
      </Container>

      <Footer />
    </>
  );
};

export default Register;
