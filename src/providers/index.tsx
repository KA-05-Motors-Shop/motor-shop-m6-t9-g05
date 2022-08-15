import { ReactNode } from "react";
import { AdsProvider } from "./Ads";
import { CepProvider } from "./CEP";
import { CommentProvider } from "./Comments";
import { ModalProvider } from "./Modal";
import { UserProvider } from "./User";

interface ChildrenProps {
  children: ReactNode;
}

const AppProvider = ({ children }: ChildrenProps) => {
  return (
    <UserProvider>
      <AdsProvider>
        <CommentProvider>
          <CepProvider>
            <ModalProvider>{children}</ModalProvider>
          </CepProvider>
        </CommentProvider>
      </AdsProvider>
    </UserProvider>
  );
};

export default AppProvider;
