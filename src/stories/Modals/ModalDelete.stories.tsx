import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import ModalDelete from "../../components/Modals/ModalDelete";

export default {
  title: "Modals/ModalDelete",
  component: ModalDelete,
  decorators: [withRouter],
} as ComponentMeta<typeof ModalDelete>;

export const Primary: ComponentStory<typeof ModalDelete> = () => (
  <ModalDelete vehicle_id="1234" />
);
