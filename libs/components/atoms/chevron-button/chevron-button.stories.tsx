import { StoryObj, Meta } from '@storybook/react';
import { ChevronButton } from './chevron-button';

export default {
  title: 'Atoms/ChevronButton',
  component: ChevronButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} as Meta<typeof ChevronButton>;

type Template = StoryObj<typeof ChevronButton>;

export const Default: Template = {
  args: {},
};
