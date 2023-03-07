import { StoryObj, Meta } from '@storybook/react';
import { BottomTitleCard } from './bottom-title-card';

export default {
  title: 'Atoms/BottomTitleCard',
  component: BottomTitleCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} as Meta<typeof BottomTitleCard>;

type Template = StoryObj<typeof BottomTitleCard>;

export const Default: Template = {
  args: {
    name: 'Luke Skywalker',
  },
};
