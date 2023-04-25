import SpeciesId from '../../pages/species/[id]';
import { render, waitFor } from '@testing-library/react';
import { MainProvider } from '@provider/main-provider';
import mockRouter from 'next-router-mock';

describe('SpeciesId dynamyc page id', () => {
  beforeEach(() => {
    mockRouter.push({ pathname: '/species/1', query: { id: '1' } });
  });

  it('should render successfully', async () => {
    const { baseElement } = render(<SpeciesId />, { wrapper: MainProvider });
    await waitFor(() => {
      expect(baseElement).toBeTruthy();
    });
  });

  it('should render SpeciesId page', async () => {
    const { getByText } = render(<SpeciesId />, {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(getByText(/species/i)).toBeInTheDocument();
    });
  });
});
