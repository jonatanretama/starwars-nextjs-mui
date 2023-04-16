import { StoryObj, Meta } from '@storybook/react';
import { CardsOrquestator } from './cards-orquestator';

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
  args: {},
};
