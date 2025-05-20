import type { Meta, StoryObj } from '@storybook/react';

import { PRODUCTS } from 'src/shared/constants/mocks/products';

import ProductDetails from './ProductDetails';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ProductDetails> = {
  title: 'ProductDetails',
  component: ProductDetails,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example: Story = {
  args: {
    price: PRODUCTS[0].price,
    category: PRODUCTS[0].category,
    img: PRODUCTS[0].img,
    name: PRODUCTS[0].name,
    description: PRODUCTS[0].description,
  },
};
