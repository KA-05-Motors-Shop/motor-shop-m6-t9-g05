import { ComponentStory, ComponentMeta } from "@storybook/react";
import EmptyList from "../../components/EmptyList";

export default {
  title: "EmptyList/EmptyList",
  component: EmptyList,
} as ComponentMeta<typeof EmptyList>;

export const Primary: ComponentStory<typeof EmptyList> = () => <EmptyList />;

export const Secundary: ComponentStory<typeof EmptyList> = () => (
  <EmptyList admin={true} />
);
