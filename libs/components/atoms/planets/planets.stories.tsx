import { StoryObj, Meta } from '@storybook/react';
import { Planets } from './planets';

export default {
  title: 'Atoms/Planets',
  component: Planets,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} as Meta<typeof Planets>;

type Template = StoryObj<typeof Planets>;

export const Default: Template = {
  args: {},
};
