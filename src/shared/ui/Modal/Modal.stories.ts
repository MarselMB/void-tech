import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    visible: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const VisibleModal: Story = {
  args: {
    visible: true,
    children: 'This is the content of the modal',
  },
};

export const HiddenModal: Story = {
  args: {
    visible: false,
    children: '<div>This is the content of the modal</div>',
  },
};
