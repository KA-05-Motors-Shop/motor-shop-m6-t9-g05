import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}

interface Address {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

interface CepContextData {
  getAddress: (cep: string) => Promise<void>;
  address: Address;
}

const CepContext = createContext<CepContextData>({} as CepContextData);

export const CepProvider = ({ children }: Props) => {
  const [address, setAddress] = useState<Address>({} as Address);


  const getAddress = async (cep: string) => {
    await axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => setAddress(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <CepContext.Provider value={{ getAddress, address }}>
      {children}
    </CepContext.Provider>
  );
};

export const useCep = () => useContext(CepContext);
