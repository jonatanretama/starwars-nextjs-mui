import People from '../pages/people';
import { render, waitFor } from '@testing-library/react';
import { MainProvider } from '@provider/main-provider';

describe('People page', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(<People />, { wrapper: MainProvider });
    await waitFor(() => {
      expect(baseElement).toBeTruthy();
    });
  });

  it('should render People page', async () => {
    const { getAllByRole } = render(<People />, {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(
        getAllByRole('img', { name: /picture of luke/i })[0]
      ).toBeInTheDocument();
      expect(
        getAllByRole('img', { name: /picture of c-3po/i })[0]
      ).toBeInTheDocument();
    });
  });
});
