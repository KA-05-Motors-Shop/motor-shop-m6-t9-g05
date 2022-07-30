import { createContext, ReactNode, useContext, useState } from "react";

const ModalContext = createContext([]);

interface ModalProps {
  children: ReactNode;
}

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
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
