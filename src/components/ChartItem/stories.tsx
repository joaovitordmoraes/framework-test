import { StoryObj, Meta } from '@storybook/react';
import { ChartItem } from '.';

export default {
  title: 'Chart/ChartItem',
  component: ChartItem,
} as Meta<typeof ChartItem>;

export const Default: StoryObj<typeof ChartItem> = {
  args: {
    image: './images/maca.png',
    name: 'Maçã',
    onClick: () => console.log('click'),
    price: 5
  },
  render: (args) => <ChartItem {...args} />
}
