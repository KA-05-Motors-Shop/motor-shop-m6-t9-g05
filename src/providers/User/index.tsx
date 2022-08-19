import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { scrollToTop } from "../../utils/scrollToTop";
import { useModal } from "../Modal";

interface Props {
  children: ReactNode;
}

interface UserAuth {
  userId: string;
  token: string;
  loggedIn: string
}

interface CreateUserProps {
  name: string;
  email: string;
  cpf: string;
  cel: string;
  birth_date: string;
  description: string;
  address: Address;
  account_type: string;
  password: string;
}

interface Address {
  cep: string;
  street: string;
  complement: string;
  city: string;
  state: string;
  number: string;
}

interface UpdateUserProps {
  name?: string;
  email?: string;
  cpf?: string;
  cel?: string;
  birth_date?: string;
  description?: string;
  address?: Address;
  account_type?: string;
}

interface UpdateAddressProps {
  cep?: string;
  street?: string;
  complement?: string;
  city?: string;
  state?: string;
  number?: string;
}

interface Comments {
  id: string;
  message: string;
  owner: {
    id: string;
    name: string;
  };
}

interface Vehicles {
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
  published: boolean;
  comments: Comments[];
}

interface User {
  id: string;
  name: string;
  email: string;
  cpf: string;
  cel: string;
  birth_date: string;
  description: string;
  address: Address;
  account_type: string;
  vehicles: Vehicles[];
}

interface LoginProps {
  email: string;
  password: string;
}

interface UserContextData {
  userAuth: UserAuth;
  user?: User;
  users: User[];
  createUser: (data: CreateUserProps) => Promise<void>;
  getUser: (id: string) => Promise<void>;
  getUsers: () => Promise<void>;
  updateUser: (id: string, data: UpdateUserProps) => Promise<void>;
  updateAddress: (id: string, data: UpdateAddressProps) => Promise<void>;
  deleteUser: (id: string) => Promise<void>;
  login: (data: LoginProps) => Promise<void>;
  logout: () => void;
  endSession: () => void
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider = ({ children }: Props) => {
  const { Switch } = useModal();
  const [userAuth, setUserAuth] = useState<UserAuth>(() => {
    const data = localStorage.getItem("@UserAuth");

    if (data) {
      return JSON.parse(data);
    }

    return {} as UserAuth;
  });

  const [user, setUser] = useState<User>();
  const [users, setUsers] = useState<User[]>([]);

  const navigate = useNavigate();

  const createUser = useCallback(async (data: CreateUserProps) => {
    await api
      .post("/users", data)
      .then(() => {
        scrollToTop();
        Switch("ModalSucess");
      })
      .catch((err) => toast.error(err.response.data.message));
  }, []);

  const getUser = useCallback(async (id: string) => {
    await api.get(`/users/${id}`)
    .then(({data}) => setUser(data))
    .catch(() => navigate('/error'))
    
  }, []);

  const getUsers = useCallback(async () => {
    const { data } = await api.get("/users");
    setUsers(data);
  }, []);

  const updateUser = useCallback(async (id: string, data: UpdateUserProps) => {
    await api
      .patch(`/users/${id}`, data)
      .then(() => {
        toast.success("Informações atualizadas");
        getUser(id);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateAddress = useCallback(
    async (id: string, data: UpdateAddressProps) => {
      await api
        .patch(`/users/${id}/address`, data)
        .then(() => {
          toast.success("Endereço atualizado");
          getUser(id);
        })
        .catch((err) => console.log(err));
    },
    []
  );

  const deleteUser = useCallback(async (id: string) => {
    await api
      .delete(`/users/${id}`)
      .then(() => toast.success("Conta deletada"))
      .catch((err) => console.log(err));
  }, []);

  const login = useCallback(async (data: LoginProps) => {
    await api
      .post("/login", data)
      .then((res) => {
        localStorage.setItem("@UserAuth", JSON.stringify({...res.data, loggedIn: new Date()}));
        setUserAuth({...res.data, loggedIn: new Date()});
        toast.success("Login efetuado");
        navigate("/profile_admin");
      })
      .catch((err) =>
        toast.error(err.response.data.message || "Erro ao efetuar login")
      );
  }, []);

  const logout = useCallback(() => {
    localStorage.clear();
    setUserAuth({} as UserAuth);
    navigate("/");
  }, []);

  const endSession = useCallback(() => {
    localStorage.clear()
    setUserAuth({} as UserAuth);
  },[])

  return (
    <UserContext.Provider
      value={{
        createUser,
        deleteUser,
        getUser,
        getUsers,
        updateAddress,
        updateUser,
        login,
        logout,
        endSession,
        user,
        userAuth,
        users,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
