import PeopleId from '../../pages/people/[id]';
import { render, waitFor } from '@testing-library/react';
import { MainProvider } from '@provider/main-provider';
import mockRouter from 'next-router-mock';

describe('PeopleId dynamyc page id', () => {
  beforeEach(() => {
    mockRouter.push({ pathname: '/people/1', query: { id: '1' } });
  });

  it('should render successfully', async () => {
    const { baseElement } = render(<PeopleId />, { wrapper: MainProvider });
    await waitFor(() => {
      expect(baseElement).toBeTruthy();
    });
  });

  it('should render PeopleId page', async () => {
    const { getByRole, getByText } = render(<PeopleId />, {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(
        getByRole('img', { name: /picture of luke/i })
      ).toBeInTheDocument();
      expect(getByText(/height/i)).toBeInTheDocument();
    });
  });
});
