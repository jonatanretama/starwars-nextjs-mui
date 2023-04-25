import VehiclesId from '../../pages/vehicles/[id]';
import { render, waitFor } from '@testing-library/react';
import { MainProvider } from '@provider/main-provider';
import mockRouter from 'next-router-mock';

describe('VehiclesId dynamyc page id', () => {
  beforeEach(() => {
    mockRouter.push({ pathname: '/vehicles/1', query: { id: '1' } });
  });

  it('should render successfully', async () => {
    const { baseElement } = render(<VehiclesId />, { wrapper: MainProvider });
    await waitFor(() => {
      expect(baseElement).toBeTruthy();
    });
  });

  it('should render VehiclesId page', async () => {
    const { getByText } = render(<VehiclesId />, {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(getByText(/vehicles/i)).toBeInTheDocument();
    });
  });
});
