import StarshipsId from '../../pages/starships/[id]';
import { render, waitFor } from '@testing-library/react';
import { MainProvider } from '@provider/main-provider';
import mockRouter from 'next-router-mock';

describe('StarshipsId dynamyc page id', () => {
  beforeEach(() => {
    mockRouter.push({ pathname: '/starships/1', query: { id: '1' } });
  });

  it('should render successfully', async () => {
    const { baseElement } = render(<StarshipsId />, { wrapper: MainProvider });
    await waitFor(() => {
      expect(baseElement).toBeTruthy();
    });
  });

  it('should render StarshipsId page', async () => {
    const { getByText } = render(<StarshipsId />, {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(getByText(/starships/i)).toBeInTheDocument();
    });
  });
});
