import { StoryObj, Meta } from '@storybook/react';
import { SearchBar } from '.';

export default {
  title: 'Form/SearchBar',
  component: SearchBar,
} as Meta<typeof SearchBar>;

export const Default: StoryObj = {
  render: (args) => <SearchBar {...args} />
}
