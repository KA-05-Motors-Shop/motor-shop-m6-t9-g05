import { useState } from "react";
import { useUser } from "../../providers/User";
import { randomColors } from "../../utils/randomColors";
import {
  Container,
  DivName,
  DivMessage,
  DivButton,
  DivTextArea,
} from "./styles";
import { useComment } from "../../providers/Comments";
import Button from "../Button";
import theme from "../../styles/theme";
import { X } from "phosphor-react";

interface CommentsProps {
  id: string;
  message: string;
  owner: {
    id: string;
    name: string;
  };
}

const Comments = (comment: CommentsProps) => {
  const bgColor = randomColors();
  const { userAuth } = useUser();
  const { updateComment, deleteComment } = useComment();
  const [openEdit, setOpenEdit] = useState<boolean>(false);

  const handleClick = () => setOpenEdit(!openEdit);

  return (
    <Container>
      {comment.owner.id === userAuth.userId ? (
        <>
          <DivName bgColor={bgColor}>
            <div>SL</div>
            <span>{comment.owner.name}</span>
            <span>há 7 dias</span>
          </DivName>
          {openEdit ? (
            <DivTextArea>
              <button onClick={handleClick}>
                <X weight="bold" />
              </button>
              <textarea
                defaultValue={comment.message}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    updateComment(comment.id, { message: e.target.value });
                    handleClick();
                  }
                }}
              />
            </DivTextArea>
          ) : (
            <DivMessage>
              <p>{comment.message}</p>
            </DivMessage>
          )}
          <DivButton>
            <Button
              onClick={handleClick}
              disabled={openEdit && true}
              bgcolor={openEdit ? theme.colors.grey4 : "transparent"}
              color={openEdit ? theme.colors.whiteFixed : theme.colors.grey0}
              borderColor={!openEdit ? theme.colors.grey0 : "transparent"}
            >
              Editar
            </Button>
            <Button
              onClick={() => deleteComment(comment.id)}
              bgcolor={"transparent"}
              color={theme.colors.grey0}
              borderColor={theme.colors.grey0}
            >
              Excluir
            </Button>
          </DivButton>
        </>
      ) : (
        <>
          <DivName bgColor={bgColor}>
            <div>SL</div>
            <span>{comment.owner.name}</span>
            <span>há 7 dias</span>
          </DivName>
          <DivMessage>
            <p>{comment.message}</p>
          </DivMessage>
        </>
      )}
    </Container>
  );
};

export default Comments;
