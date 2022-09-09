import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Comments from "../../components/Comments";
import AppProvider from "../../providers";

export default {
  title: "Comment/Comments",
  component: Comments,
  decorators: [
    (story) => (
      <BrowserRouter>
        <AppProvider>{story()}</AppProvider>
      </BrowserRouter>
    ),
  ],
} as ComponentMeta<typeof Comments>;

const mock = {
  id: "12345",
  message: "Mensagem teste",
  created_at: "Fri Sep 09 2022 13:33:26 GMT-0300",
  owner: {
    id: "123456",
    name: "Usuario",
  },
  vehicle_id: "1234",
};

export const Primary: ComponentStory<typeof Comments> = () => (
  <Comments {...mock} />
);
