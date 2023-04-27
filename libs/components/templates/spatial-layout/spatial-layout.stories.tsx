import { StoryObj, Meta } from '@storybook/react';
import { SpatialLayout } from './spatial-layout';

export default {
  title: 'Templates/SpatialLayout',
  component: SpatialLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} as Meta<typeof SpatialLayout>;

type Template = StoryObj<typeof SpatialLayout>;

export const Default: Template = {
  args: {
    children: 'content',
  },
};
