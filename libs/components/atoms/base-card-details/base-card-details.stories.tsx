import { StoryObj, Meta } from '@storybook/react';
import { BaseCardDetails } from './base-card-details';
import { PEOPLE_DATA } from '@mocks';

export default {
  title: 'Atoms/BaseCardDetails',
  component: BaseCardDetails,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} as Meta<typeof BaseCardDetails>;

type Template = StoryObj<typeof BaseCardDetails>;

export const Default: Template = {
  args: {
    data: PEOPLE_DATA.results[0],
    actualPage: 'people',
    children: 'Content',
  },
};
