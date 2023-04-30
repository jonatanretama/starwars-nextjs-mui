import { StoryObj, Meta } from '@storybook/react';
import { ResumeCard } from './resume-card';

export default {
  title: 'Molecules/ResumeCard',
  component: ResumeCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} as Meta<typeof ResumeCard>;

type Template = StoryObj<typeof ResumeCard>;

export const Default: Template = {
  args: {
    nameOrPath: 'people',
    title: 'A New Hope',
  },
};
