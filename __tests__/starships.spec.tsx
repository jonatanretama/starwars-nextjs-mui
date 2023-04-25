import Starships from '../pages/starships';
import { render, waitFor } from '@testing-library/react';
import { MainProvider } from '@provider/main-provider';

describe('Starships page', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(<Starships />, { wrapper: MainProvider });
    await waitFor(() => {
      expect(baseElement).toBeTruthy();
    });
  });

  it('should render Starships page', async () => {
    const { getAllByRole } = render(<Starships />, {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(
        getAllByRole('img', { name: /picture of CR90 corvette/i })[0]
      ).toBeInTheDocument();
      expect(
        getAllByRole('img', { name: /picture of Star Destroyer/i })[0]
      ).toBeInTheDocument();
    });
  });
});
