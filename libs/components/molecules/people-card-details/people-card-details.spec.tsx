import { render, waitFor } from '@testing-library/react';
import { PeopleCardDetails } from './people-card-details';
import { MainProvider } from '@provider/main-provider';

describe('PeopleCardDetails', () => {
  it('should render PeopleCardDetails image and labels', async () => {
    const { getByRole, getByText } = render(<PeopleCardDetails />, {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(getByText(/tatooine/i)).toBeInTheDocument();
      expect(getByRole('img', { name: /imagen/i })).toBeInTheDocument();
    });
  });
});
