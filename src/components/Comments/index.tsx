import { randomColors } from "../../utils/randomColors";
import { Container, DivName, DivMessage } from "./styles";

interface CommentsProps {
  id: string
  message: string;
  owner: {
    id: string
    name: string
  }
}

const Comments = (comment: CommentsProps) => {
  const bgColor = randomColors();

  return (
    <Container>
      <DivName bgColor={bgColor}>
        <div>SL</div>
        <span>{comment.owner.name}</span>
        <span>há 7 dias</span>
      </DivName>
      <DivMessage>
        <p>{comment.message}</p>
      </DivMessage>
    </Container>
  );
};

export default Comments;
