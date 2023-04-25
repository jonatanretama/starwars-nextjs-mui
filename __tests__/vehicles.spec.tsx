import Vehicles from '../pages/vehicles';
import { render, waitFor } from '@testing-library/react';
import { MainProvider } from '@provider/main-provider';

describe('Vehicles page', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(<Vehicles />, { wrapper: MainProvider });
    await waitFor(() => {
      expect(baseElement).toBeTruthy();
    });
  });

  it('should render Vehicles page', async () => {
    const { getAllByRole } = render(<Vehicles />, {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(
        getAllByRole('img', { name: /picture of Sand Crawler/i })[0]
      ).toBeInTheDocument();
      expect(
        getAllByRole('img', { name: /picture of T-16 skyhopper/i })[0]
      ).toBeInTheDocument();
    });
  });
});
