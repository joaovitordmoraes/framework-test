import { StoryObj, Meta } from '@storybook/react';
import { Button } from '.';

export default {
  title: 'Form/Button',
  component: Button,
} as Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  args: {
    variant: 'primary',
    children: 'Buy now'
  },
  render: (args) => <Button {...args} />
}

export const Link: StoryObj<typeof Button> = {
  args: {
    variant: 'primary',
    children: 'Buy now',
    as: 'a',
    href: '/test-link',
    fullWidth: true
  },
  render: (args) => <Button {...args} />
}
