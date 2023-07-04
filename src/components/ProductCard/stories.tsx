import { StoryObj, Meta } from '@storybook/react';
import { ProductCard } from '.';

export default {
  title: 'Product/ProductCard',
  component: ProductCard,
} as Meta<typeof ProductCard>;

export const Default: StoryObj<typeof ProductCard> = {
  args: {
    image: './images/maca.png',
    name: 'Maçã',
    onClick: () => console.log('click'),
    price: 5
  },
  render: (args) => <ProductCard {...args} />
}
