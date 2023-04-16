import People from '../pages/people';
import { render, waitFor } from '@testing-library/react';
import { MainProvider } from '@provider/main-provider';

describe('People', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<People />, { wrapper: MainProvider });
    expect(baseElement).toBeTruthy();
  });

  it('should render CardsOrquestator', async () => {
    const { getAllByRole, getByText } = render(<People />, {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(getAllByRole('img', { name: /imagen/i })[0]).toBeInTheDocument();
      expect(getByText(/luke skywalker/i)).toBeInTheDocument();
    });
  });
});
