import { StoryObj, Meta } from '@storybook/react';
import { PeopleOrquestator } from './people-orquestator';

export default {
  title: 'Organisms/PeopleOrquestator',
  component: PeopleOrquestator,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} as Meta<typeof PeopleOrquestator>;

type Template = StoryObj<typeof PeopleOrquestator>;

export const Default: Template = {
  args: {},
};
