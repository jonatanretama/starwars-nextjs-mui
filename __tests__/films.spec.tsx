import Films from '../pages/films';
import { render, waitFor } from '@testing-library/react';
import { MainProvider } from '@provider/main-provider';

describe('Films page', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(<Films />, { wrapper: MainProvider });
    await waitFor(() => {
      expect(baseElement).toBeTruthy();
    });
  });

  it('should render Films page', async () => {
    const { getAllByRole } = render(<Films />, {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(
        getAllByRole('img', { name: /picture of a new hope/i })[0]
      ).toBeInTheDocument();
      expect(
        getAllByRole('img', { name: /picture of the empire strikes/i })[0]
      ).toBeInTheDocument();
    });
  });
});
