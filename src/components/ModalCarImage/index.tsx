import React from "react";
import { useModal } from "../../providers/Modal";
import Button from "../Button";
import { ModalContainer } from "./style";

interface ModalCarImageProps {}

const ModalCarImage: React.FC<ModalCarImageProps> = ({}) => {
  const { Switch, stateModalCarImage } = useModal();

  return (
    <ModalContainer hidden={stateModalCarImage}>
      Teste
      <Button onClick={() => Switch("ModalCarImage")}>x</Button>
    </ModalContainer>
  );
};

export default ModalCarImage;
