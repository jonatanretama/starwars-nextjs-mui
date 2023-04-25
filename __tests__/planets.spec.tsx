import Planets from '../pages/planets';
import { render, waitFor } from '@testing-library/react';
import { MainProvider } from '@provider/main-provider';

describe('Planets page', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(<Planets />, { wrapper: MainProvider });
    await waitFor(() => {
      expect(baseElement).toBeTruthy();
    });
  });

  it('should render Planets page', async () => {
    const { getAllByRole } = render(<Planets />, {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(
        getAllByRole('img', { name: /picture of tatooine/i })[0]
      ).toBeInTheDocument();
      expect(
        getAllByRole('img', { name: /picture of yavin/i })[0]
      ).toBeInTheDocument();
    });
  });
});
