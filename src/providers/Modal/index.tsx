import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ModalProps {
  children: ReactNode;
}

interface ModalContextData {
  stateModalCarImage: boolean;
  openCreateAdModal: boolean;
  openSucessModal: boolean;
  setStateModalCarImage: React.Dispatch<SetStateAction<boolean>>;
  Switch: (modal: string) => void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export const ModalProvider = ({ children }: ModalProps) => {
  const [stateModalCarImage, setStateModalCarImage] = useState<boolean>(true);
  const [openCreateAdModal, setOpenCreateAdModal] = useState<boolean>(false);
  const [openSucessModal, setOpenSucessModal] = useState<boolean>(false);

  const Switch = (modal: string) => {
    switch (modal) {
      case "ModalCarImage": {
        setStateModalCarImage(!stateModalCarImage);
        break;
      }
      case "ModalCreateAd": {
        setOpenCreateAdModal(!openCreateAdModal);
        break;
      }
      case "ModalSucess": {
        setOpenSucessModal(!openSucessModal);
        break;
      }

      default: {
        break;
      }
    }
  };

  return (
    <ModalContext.Provider
      value={{
        Switch,
        stateModalCarImage,
        openCreateAdModal,
        openSucessModal,
        setStateModalCarImage,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
