import type { Meta, StoryObj } from '@storybook/react';
import AddToCartBtn from './AddToCartBtn';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof AddToCartBtn> = {
  title: 'AddToCartBtn',
  component: AddToCartBtn,
  tags: ['autodocs'],
  argTypes: {
    counter: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const AddToCart: Story = {
  args: {
    counter: 0,
  },
};

export const Counter: Story = {
  args: {
    counter: 10,
  },
};
