import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import CreateAd from "../../components/Modals/ModalCreateAd";

export default {
  title: "Modals/ModalCreateAd",
  component: CreateAd,
  decorators: [withRouter],
} as ComponentMeta<typeof CreateAd>;

export const Primary: ComponentStory<typeof CreateAd> = () => <CreateAd />;
