import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import toast from "react-hot-toast";
import { api } from "../../services/api";
import { scrollToTop } from "../../utils/scrollToTop";
import { useModal } from "../Modal";
import { useUser } from "../User";

interface Props {
  children: ReactNode;
}

interface CreateAdProps {
  title: string;
  type_of_ad: string;
  year: number;
  km: number;
  price: number;
  description: string;
  type_of_vehicle: string;
  cover_image: string;
  gallery_image: string;
  gallery_image2?: string;
  gallery_image3?: string;
  gallery_image4?: string;
  gallery_image5?: string;
  gallery_image6?: string;
}

interface UpdateAdProps {
  title?: string;
  type_of_ad?: string;
  year?: number;
  km?: number;
  price?: number;
  description?: string;
  type_of_vehicle?: string;
  cover_image?: string;
  gallery_image?: string;
  gallery_image2?: string;
  gallery_image3?: string;
  gallery_image4?: string;
  gallery_image5?: string;
  gallery_image6?: string;
  published?: boolean
}

interface Comments {
  id: string;
  message: string;
  owner: {
    id: string;
    name: string;
  };
}

interface AdProps {
  id: string;
  title: string;
  type_of_ad: string;
  year: number;
  km: number;
  price: number;
  description: string;
  type_of_vehicle: string;
  cover_image: string;
  gallery_image: string;
  gallery_image2?: string;
  gallery_image3?: string;
  gallery_image4?: string;
  gallery_image5?: string;
  gallery_image6?: string;
  owner: {
    id: string;
    name: string;
  };
  comments: Comments[];
  published: boolean
}

interface AdsContextData {
  ads: AdProps[];
  ad: AdProps;
  createAd: (data: CreateAdProps) => Promise<void>;
  getAds: () => Promise<void>;
  getOneAd: (id: string) => Promise<void>;
  updateAd: (id: string, data: UpdateAdProps) => Promise<void>;
  deleteAd: (id: string) => Promise<void>;
}

const AdsContext = createContext<AdsContextData>({} as AdsContextData);

export const AdsProvider = ({ children }: Props) => {
  const { userAuth, getUser } = useUser();
  const { Switch } = useModal();

  const [ads, setAds] = useState<AdProps[]>([]);
  const [ad, setAd] = useState<AdProps>({} as AdProps);

  const createAd = useCallback(async (data: CreateAdProps) => {
    await api
      .post("/vehicles", data, {
        headers: {
          Authorization: `Bearer ${userAuth.token}`,
        },
      })
      .then(() => {
        Switch("ModalCreateAd");
        scrollToTop()
        Switch('ModalSucess')
        getUser(userAuth.userId);
      })
      .catch((err) => console.log(err));
  }, []);

  const getAds = useCallback(async () => {
    const { data } = await api.get("/vehicles");
    setAds(data);
  }, []);

  const getOneAd = useCallback(async (id: string) => {
    const { data } = await api.get(`/vehicles/${id}`);
    setAd(data);
  }, []);

  const updateAd = useCallback(async (id: string, data: UpdateAdProps) => {
    await api
      .patch(`/vehicles/${id}`, data, {
        headers: {
          Authorization: `Bearer ${userAuth.token}`,
        },
      })
      .then(() => {
        toast.success("Informações atualizadas");
        Switch('ModalEditAd')
        getUser(userAuth.userId);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteAd = useCallback(async (id: string) => {
    await api
      .delete(`/vehicles/${id}`, {
        headers: {
          Authorization: `Bearer ${userAuth.token}`,
        },
      })
      .then(() => {
        toast.success("Veiculo deletado");
        getUser(userAuth.userId);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <AdsContext.Provider
      value={{ ad, ads, createAd, deleteAd, getAds, getOneAd, updateAd }}
    >
      {children}
    </AdsContext.Provider>
  );
};

export const useAds = () => useContext(AdsContext);
