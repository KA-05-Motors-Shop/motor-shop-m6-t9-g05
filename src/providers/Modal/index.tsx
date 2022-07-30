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
  setStateModalCarImage: React.Dispatch<SetStateAction<boolean>>;
  Switch: (modal: string) => void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export const ModalProvider = ({ children }: ModalProps) => {
  const [stateModalCarImage, setStateModalCarImage] = useState(true);

  const Switch = (modal: string) => {
    switch (modal) {
      case "ModalCarImage": {
        setStateModalCarImage(!stateModalCarImage);
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
        setStateModalCarImage,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
