import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import Header from "../../components/Header";

export default {
  title: "Headers/Header",
  component: Header,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/register",
    },
  },
} as ComponentMeta<typeof Header>;

export const Primary: ComponentStory<typeof Header> = () => <Header />;
