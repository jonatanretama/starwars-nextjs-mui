import { StoryObj, Meta } from '@storybook/react';
import { PeopleCardDetails } from './people-card-details';
import { peopleByIdHandler } from '@mocks';

// TODO: Fix story
export default {
  title: 'Molecules/PeopleCardDetails',
  component: PeopleCardDetails,
  tags: ['autodocs'],
  parameters: {
    // msw: [peopleByIdHandler],
    layout: 'padded',
  },
} as Meta<typeof PeopleCardDetails>;

type Template = StoryObj<typeof PeopleCardDetails>;

export const Default: Template = {
  args: {},
};

Default.parameters = {
  msw: {
    handlers: [peopleByIdHandler],
  },
};
