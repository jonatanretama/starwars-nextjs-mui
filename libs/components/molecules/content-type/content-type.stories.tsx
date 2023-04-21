import { StoryObj, Meta } from '@storybook/react';
import { ContentType } from './content-type';

export default {
  title: 'Molecules/ContentType',
  component: ContentType,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} as Meta<typeof ContentType>;

type Template = StoryObj<typeof ContentType>;

export const Default: Template = {
  args: {},
};
