import { StoryObj, Meta } from '@storybook/react';
import { PeopleContent } from './people-content';

export default {
  title: 'Atoms/PeopleContent',
  component: PeopleContent,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} as Meta<typeof PeopleContent>;

type Template = StoryObj<typeof PeopleContent>;

export const Default: Template = {
  args: {
    planetName: 'tatooine',
    planetId: '1',
    keyName: 'Homeworld',
  },
};

export const WithoutPlanetValues: Template = {
  args: {
    value: 'male',
    keyName: 'Gender',
  },
};
