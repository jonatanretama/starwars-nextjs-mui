import { StoryObj, Meta } from '@storybook/react';
import { PaginationCard } from './pagination-card';

export default {
  title: 'Atoms/PaginationCard',
  component: PaginationCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} as Meta<typeof PaginationCard>;

type Template = StoryObj<typeof PaginationCard>;

export const Default: Template = {
  args: {
    page: 1,
    getLengthForPagination: () => 10,
  },
};
