import Species from '../pages/species';
import { render, waitFor } from '@testing-library/react';
import { MainProvider } from '@provider/main-provider';

describe('Species page', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(<Species />, { wrapper: MainProvider });
    await waitFor(() => {
      expect(baseElement).toBeTruthy();
    });
  });

  it('should render Species page', async () => {
    const { getAllByRole } = render(<Species />, {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(
        getAllByRole('img', { name: /picture of human/i })[0]
      ).toBeInTheDocument();
      expect(
        getAllByRole('img', { name: /picture of wookie/i })[0]
      ).toBeInTheDocument();
    });
  });
});
