import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Input } from "../../components/Input";
import { useUser } from "../../providers/User";
import { loginSchema } from "../../schemas/login.schema";
import theme from "../../styles/theme";
import { Container, Form, Div, DivForm, DivTitle, H2, Span } from "./styles";

interface LoginProps {
  email: string;
  password: string;
}

const Login = () => {
  document.title = 'Login'
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    resolver: yupResolver(loginSchema),
  });

  const { login } = useUser();

  const history = useNavigate();

  const onSubmit = async (data: LoginProps) => {
    await login(data);
  };

  return (
    <>
      <Header />

      <Container>
        <DivForm>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <DivTitle>
              <H2>Login</H2>
            </DivTitle>
            <Input
              label="Usuario"
              placeholder="Digitar usuario"
              {...register("email")}
              error={errors.email?.message}
            />
            <Input
              label="Senha"
              type="password"
              placeholder="Digitar senha"
              {...register("password")}
              error={errors.password?.message}
            />
            <Div>
              <a href="#">Esqueci minha senha</a>
            </Div>

            <Button height={38} type="submit">
              Entrar
            </Button>
            <Span>Ainda não possui conta ?</Span>
            <Button
              height={38}
              bgcolor="transparent"
              color={theme.colors.grey0}
              borderColor={theme.colors.grey4}
              onClick={() => history("/register")}
            >
              Cadastrar
            </Button>
          </Form>
        </DivForm>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
