import { StoryObj, Meta } from '@storybook/react';
import { Header } from '.';

export default {
  title: 'General/Header',
  component: Header,
} as Meta<typeof Header>;

export const Default: StoryObj<typeof Header> = {
  args: {
    onClick: () => console.log('click'),
    buttonLabel: 'Entrar'
  },
  render: (args) => <Header {...args} />
}
