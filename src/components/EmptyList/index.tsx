import { Container } from "./styles";

interface EmptyListProps {
  admin?: boolean;
}

const EmptyList = ({ admin = false }: EmptyListProps) => {
  return (
    <Container>Nenhum veiculo {admin ? "registrado" : "disponível"}</Container>
  );
};

export default EmptyList;
