import FilmsId from '../../pages/films/[id]';
import { render, waitFor } from '@testing-library/react';
import { MainProvider } from '@provider/main-provider';
import mockRouter from 'next-router-mock';

describe('FilmsId dynamyc page id', () => {
  beforeEach(() => {
    mockRouter.push({ pathname: '/films/1', query: { id: '1' } });
  });

  it('should render successfully', async () => {
    const { baseElement } = render(<FilmsId />, { wrapper: MainProvider });
    await waitFor(() => {
      expect(baseElement).toBeTruthy();
    });
  });

  it('should render FilmsId page', async () => {
    const { getByText } = render(<FilmsId />, {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(getByText(/films/i)).toBeInTheDocument();
    });
  });
});
