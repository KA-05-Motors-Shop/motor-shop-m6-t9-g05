import { randomColors } from "../../utils/randomColors";
import { Container, DivName, DivMessage } from "./styles";

interface CommentsProps {
  username: string;
  comment: string;
}

const Comments = ({ username, comment }: CommentsProps) => {
  const bgColor = randomColors();

  return (
    <Container>
      <DivName bgColor={bgColor}>
        <div>SL</div>
        <span>{username}</span>
        <span>há 7 dias</span>
      </DivName>
      <DivMessage>
        <p>{comment}</p>
      </DivMessage>
    </Container>
  );
};

export default Comments;
