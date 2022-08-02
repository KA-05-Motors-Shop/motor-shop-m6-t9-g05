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
  setStateModalCarImage: React.Dispatch<SetStateAction<boolean>>;
  Switch: (modal: string) => void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export const ModalProvider = ({ children }: ModalProps) => {
  const [stateModalCarImage, setStateModalCarImage] = useState<boolean>(true);
  const [openCreateAdModal, setOpenCreateAdModal] = useState<boolean>(false);

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
        setStateModalCarImage,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
