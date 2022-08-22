import { Warning } from "phosphor-react";
import { Container, Div, DivIcon, H1, Link, P } from "./styles";

const PageError = () => {

    document.title = 'Page not found'

  return (
    <Container>
      <DivIcon>
        <Warning />
      </DivIcon>
      <Div>
        <H1>Ops...</H1>
        <P>A página que você procura não esta disponivel!</P>
        <Link href="/">Voltar para página principal</Link>
      </Div>
    </Container>
  );
};

export default PageError;
