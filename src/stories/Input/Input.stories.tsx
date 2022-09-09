import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "../../components/Input";

export default {
  title: "Input/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

export const Primary: ComponentStory<typeof Input> = (args) => (
  <Input {...args} placeholder="Digite aqui..." label="Input sem mascara" />
);

export const Secundary: ComponentStory<typeof Input> = (args) => (
  <Input
    {...args}
    placeholder="Digite aqui..."
    mask="999.999.999-99"
    label="Input com mascara"
  />
);
