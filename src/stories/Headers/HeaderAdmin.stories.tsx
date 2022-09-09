import { ComponentStory, ComponentMeta } from "@storybook/react";
import HeaderAdmin from "../../../src/components/HeaderAdmin";
import AppProvider from "../../providers";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Headers/HeaderAdmin",
  component: HeaderAdmin,
  decorators: [
    (story) => (
      <BrowserRouter>
        <AppProvider>{story()}</AppProvider>
      </BrowserRouter>
    ),
  ],
  parameters: {
    reactRouter: {
      routePath: "/profile_view_admin",
    },
  },
} as ComponentMeta<typeof HeaderAdmin>;

export const Primary: ComponentStory<typeof HeaderAdmin> = (args) => (
  <HeaderAdmin {...args} />
);
