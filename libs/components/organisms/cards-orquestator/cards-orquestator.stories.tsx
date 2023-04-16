import { StoryObj, Meta } from '@storybook/react';
import { CardsOrquestator } from './cards-orquestator';
import { PEOPLE_DATA } from '@mocks';

export default {
  title: 'Organisms/CardsOrquestator',
  component: CardsOrquestator,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} as Meta<typeof CardsOrquestator>;

type Template = StoryObj<typeof CardsOrquestator>;

export const Default: Template = {
  args: {
    results: PEOPLE_DATA.results,
    setPage: () => null,
    countTotalItems: 3,
  },
};
