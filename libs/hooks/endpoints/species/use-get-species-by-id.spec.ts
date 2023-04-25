import { renderHook, waitFor } from '@testing-library/react';
import { MainProvider } from '@provider';
import { useGetSpeciesById } from './use-get-species-by-id';
import { SPECIES_DATA, speciesByIdHandler } from '@mocks';
import { server } from 'jest.setup';

describe('useGetSpeciesById', () => {
  beforeEach(() => {
    server.use(speciesByIdHandler);
  });

  it('should return species details by id', async () => {
    const { result } = renderHook(() => useGetSpeciesById({ id: '1' }), {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });

    expect(result.current.data?.data).toStrictEqual(SPECIES_DATA.results[0]);
  });

  it('should return error species details by id', async () => {
    const { result } = renderHook(() => useGetSpeciesById({ id: '1' }), {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });

    expect(result.current.data?.data).not.toStrictEqual(
      SPECIES_DATA.results[1]
    );
  });
});
