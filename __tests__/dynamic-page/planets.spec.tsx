import PlanetsId from '../../pages/planets/[id]';
import { render, waitFor } from '@testing-library/react';
import { MainProvider } from '@provider/main-provider';
import mockRouter from 'next-router-mock';

describe('PlanetsId dynamyc page id', () => {
  beforeEach(() => {
    mockRouter.push({ pathname: '/planets/1', query: { id: '1' } });
  });

  it('should render successfully', async () => {
    const { baseElement } = render(<PlanetsId />, { wrapper: MainProvider });
    await waitFor(() => {
      expect(baseElement).toBeTruthy();
    });
  });

  it('should render PlanetsId page', async () => {
    const { getByText } = render(<PlanetsId />, {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(getByText(/planets/i)).toBeInTheDocument();
    });
  });
});
