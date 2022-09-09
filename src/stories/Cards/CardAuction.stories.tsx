import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import CardAuction from "../../components/Cards/CardAuction";

export default {
  title: "Cards/CardAuction",
  component: CardAuction,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/vehicle/:id",
      routeParams: { id: "1234" },
    },
  },
} as ComponentMeta<typeof CardAuction>;

const mock = {
  id: "1234",
  title: "GLE Coupe",
  type_of_ad: "Venda",
  year: 2022,
  km: 10000,
  price: 500000,
  description: "Gle Coupe nova",
  type_of_vehicle: "Carro",
  cover_image:
    "https://image1.mobiauto.com.br/images/api/images/v1.0/6164428/transform/fl_progressive,f_jpg,q_50,w_700",
  owner: {
    id: "123456",
    name: "Usuario",
  },
  published: true,
};

export const Primary: ComponentStory<typeof CardAuction> = () => (
  <CardAuction vehicle={mock} />
);

export const Secundary: ComponentStory<typeof CardAuction> = () => (
  <CardAuction vehicle={mock} isUser={false} />
);
