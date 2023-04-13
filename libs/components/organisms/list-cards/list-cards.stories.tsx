import { StoryObj, Meta } from '@storybook/react';
import { ListCards } from './list-cards';
import { peopleHandler } from '@mocks';

export default {
  title: 'Molecules/ListCards',
  component: ListCards,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} as Meta<typeof ListCards>;

type Template = StoryObj<typeof ListCards>;

export const Default: Template = {
  args: {},
};

Default.parameters = {
  msw: {
    handlers: [peopleHandler],
  },
};
