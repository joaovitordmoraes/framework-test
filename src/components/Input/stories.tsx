import { StoryObj, Meta } from '@storybook/react';
import { Input } from '.';

export default {
  title: 'Form/Input',
  component: Input,
} as Meta<typeof Input>;

export const Default: StoryObj<typeof Input> = {
  args: {
    label: 'Name'
  },
  render: (args) => <Input {...args} />
}

export const Password: StoryObj<typeof Input> = {
  args: {
    label: 'Password',
    type: 'password'
  },
  render: (args) => <Input {...args} />
}
