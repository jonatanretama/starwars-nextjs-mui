import { renderHook, waitFor } from '@testing-library/react';
import { MainProvider } from '@provider';
import { useGetSpecies } from './use-get-species';
import { SPECIES_DATA, speciesHandler } from '@mocks';
import { server } from 'jest.setup';

describe('useGetSpecies', () => {
  beforeEach(() => {
    server.use(speciesHandler);
  });
  it('should return species data', async () => {
    const { result } = renderHook(() => useGetSpecies({}), {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });

    expect(result.current.data?.data).toStrictEqual(SPECIES_DATA);
  });
});
