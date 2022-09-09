import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../../components/Button';

export default {
  title: 'Button/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = (args) => <Button {...args}> Button </Button>;


