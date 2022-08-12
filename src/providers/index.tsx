import { ReactNode } from "react";
import { CepProvider } from "./CEP";
import { ModalProvider } from "./Modal";

interface ChildrenProps {
  children: ReactNode;
}

const AppProvider = ({ children }: ChildrenProps) => {
  return (
    <CepProvider>
      <ModalProvider>{children}</ModalProvider>
    </CepProvider>
  );
};

export default AppProvider;
