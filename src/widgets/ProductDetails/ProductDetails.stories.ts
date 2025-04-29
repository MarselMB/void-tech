import type { Meta, StoryObj } from '@storybook/react';

import { PRODUCT_1 } from 'src/shared/constants/mocks/productItem';

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
    price: PRODUCT_1.price,
    category: PRODUCT_1.category,
    img: PRODUCT_1.img,
    name: PRODUCT_1.name,
    description: PRODUCT_1.description,
  },
};
