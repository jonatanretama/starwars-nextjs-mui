import { render, waitFor } from '@testing-library/react';
import { BaseCardDetails } from './base-card-details';
import { MainProvider } from '@provider/main-provider';
import { PEOPLE_DATA, FILMS_DATA } from '@mocks';

describe('BaseCardDetails', () => {
  it('should render BaseCardDetails image and labels with people data', async () => {
    const { getByRole, getByText } = render(
      <BaseCardDetails actualPage="people" data={PEOPLE_DATA.results[0]}>
        Content
      </BaseCardDetails>,
      {
        wrapper: MainProvider,
      }
    );

    await waitFor(() => {
      expect(
        getByRole('img', { name: /picture of luke/i })
      ).toBeInTheDocument();
      expect(getByText(/content/i)).toBeInTheDocument();
    });
  });

  it('should render BaseCardDetails image and labels with films data', async () => {
    const { getByRole, getByText } = render(
      <BaseCardDetails actualPage="people" data={FILMS_DATA.results[0]}>
        Content film
      </BaseCardDetails>,
      {
        wrapper: MainProvider,
      }
    );

    await waitFor(() => {
      expect(
        getByRole('img', { name: /picture of a new hope/i })
      ).toBeInTheDocument();
      expect(getByText(/content film/i)).toBeInTheDocument();
    });
  });
});
