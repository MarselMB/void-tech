import type { Meta, StoryObj } from '@storybook/react';

import { PRODUCT_1 } from 'src/shared/constants/mocks/productItem';

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
    price: PRODUCT_1.price,
    img: PRODUCT_1.img,
    name: PRODUCT_1.name,
    counter: 0,
  },
};

export const ProductInCart: Story = {
  args: {
    price: PRODUCT_1.price,
    img: PRODUCT_1.img,
    name: PRODUCT_1.name,
    counter: 2,
  },
};
