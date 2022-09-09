import { ComponentStory, ComponentMeta } from '@storybook/react';
import Footer from '../../components/Footer';

export default {
  title: 'Footer/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const Primary: ComponentStory<typeof Footer> = () => <Footer />;


