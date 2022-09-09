import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import ModalSucess from "../../components/Modals/ModalSucess";

export default {
  title: "Modals/ModalSucess",
  component: ModalSucess,
  decorators: [withRouter],
} as ComponentMeta<typeof ModalSucess>;

export const Primary: ComponentStory<typeof ModalSucess> = () => (
  <ModalSucess />
);

export const Secundary: ComponentStory<typeof ModalSucess> = () => (
  <ModalSucess modalLogin={true} />
);
