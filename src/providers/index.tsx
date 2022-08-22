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
    <ModalProvider>
      <UserProvider>
        <AdsProvider>
          <CommentProvider>
            <CepProvider>{children}</CepProvider>
          </CommentProvider>
        </AdsProvider>
      </UserProvider>
    </ModalProvider>
  );
};

export default AppProvider;
