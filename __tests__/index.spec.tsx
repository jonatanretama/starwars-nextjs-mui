import Home from '../pages/index';
import { render, waitFor } from '@testing-library/react';
import { MainProvider } from '@provider/main-provider';

describe('Home', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(<Home />, { wrapper: MainProvider });
    await waitFor(() => {
      expect(baseElement).toBeTruthy();
    });
  });

  it('should render PeopleCardDetails', async () => {
    const { getByRole } = render(<Home />, { wrapper: MainProvider });
    await waitFor(() => {
      expect(getByRole('img', { name: /picture of/i })).toBeInTheDocument();
    });
  });
});
