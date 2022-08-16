import { createContext, ReactNode, useCallback, useContext } from "react";
import toast from "react-hot-toast";
import { api } from "../../services/api";
import { useAds } from "../Ads";
import { useUser } from "../User";

interface Props {
  children: ReactNode;
}

interface CommentProps {
  message: string;
}

interface CommentContextData {
  createComment: (vehicle_id: string, data: CommentProps) => Promise<void>;
  updateComment: (
    id: string,
    data: CommentProps,
    vvehicle_id: string
  ) => Promise<void>;
  deleteComment: (id: string, vehicle_id: string) => Promise<void>;
}

const CommentContext = createContext<CommentContextData>(
  {} as CommentContextData
);

export const CommentProvider = ({ children }: Props) => {
  const { userAuth } = useUser();
  const { getOneAd } = useAds();

  const createComment = useCallback(
    async (vehicle_id: string, data: CommentProps) => {
      await api
        .post(`/comments/${vehicle_id}`, data, {
          headers: {
            Authorization: `Bearer ${userAuth.token}`,
          },
        })
        .then(() => getOneAd(vehicle_id))
        .catch((err) => console.log(err));
    },
    []
  );

  const updateComment = useCallback(
    async (id: string, data: CommentProps, vehicle_id: string) => {
      await api
        .patch(`/comments/${id}`, data, {
          headers: {
            Authorization: `Bearer ${userAuth.token}`,
          },
        })
        .then(() => {
          getOneAd(vehicle_id);
          toast.success("Comentario atualizado");
        })
        .catch((err) => console.log(err));
    },
    []
  );

  const deleteComment = useCallback(async (id: string, vehicle_id: string) => {
    await api
      .delete(`/comments/${id}`, {
        headers: {
          Authorization: `Bearer ${userAuth.token}`,
        },
      })
      .then(() => getOneAd(vehicle_id))
      .catch((err) => console.log(err));
  }, []);

  return (
    <CommentContext.Provider
      value={{ createComment, deleteComment, updateComment }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export const useComment = () => useContext(CommentContext);
