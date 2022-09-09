import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Loading from "../../components/Loading";
import AppProvider from "../../providers";

export default {
  title: "Loading/Loading",
  component: Loading,
  decorators: [
    (story) => (
      <BrowserRouter>
        <AppProvider>{story()}</AppProvider>
      </BrowserRouter>
    ),
  ],
} as ComponentMeta<typeof Loading>;

export const Primary: ComponentStory<typeof Loading> = () => (
  <Loading bgColor="#f12f12" />
);
