import { ReactNode } from "react";
import { ModalProvider } from "./Modal";

interface ChildrenProps {
  children: ReactNode;
}

const AppProvider = ({ children }: ChildrenProps) => {
  return <ModalProvider>{children}</ModalProvider>;
};

export default AppProvider;
