import { useUser } from "../../providers/User";
import Footer from "../Footer";
import Header from "../Header";
import HeaderAdmin from "../HeaderAdmin";
import { Spinner, Container } from "./styles";

interface Props {
  bgColor: string;
}

const Loading = ({ bgColor }: Props) => {
  const { userAuth } = useUser();

  return (
    <>
      {userAuth.token ? <HeaderAdmin bgColor={bgColor} /> : <Header />}
      <Container>
      <Spinner></Spinner>
      </Container>
      <Footer />
    </>
  );
};

export default Loading;
