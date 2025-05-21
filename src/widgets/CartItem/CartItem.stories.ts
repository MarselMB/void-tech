import type { Meta, StoryObj } from '@storybook/react';

import { PRODUCTS } from 'src/shared/constants/mocks/products';

import CartItem from './CartItem';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CartItem> = {
  title: 'CartItem',
  component: CartItem,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const EmptyCartItem: Story = {
  args: {
    price: PRODUCTS[0].price,
    img: PRODUCTS[0].img,
    name: PRODUCTS[0].name,
    counter: 0,
  },
};

export const ProductInCart: Story = {
  args: {
    price: PRODUCTS[0].price,
    img: PRODUCTS[0].img,
    name: PRODUCTS[0].name,
    counter: 2,
  },
};
