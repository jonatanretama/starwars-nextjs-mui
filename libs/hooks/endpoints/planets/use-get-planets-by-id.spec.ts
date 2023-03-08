import { renderHook, waitFor } from '@testing-library/react';
import { MainProvider } from '@provider';
import { useGetPlanetsById } from './use-get-planets-by-id';
import { PLANETS_DATA } from '@mocks';
import { server } from 'jest.setup';
import { planetsByIdHandler } from '@mocks';

describe('useGetPlanetsById', () => {
  beforeEach(() => {
    server.use(planetsByIdHandler);
  });
  it('should return planet by id', async () => {
    const { result } = renderHook(() => useGetPlanetsById({ id: '1' }), {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });

    expect(result.current.data?.data).toStrictEqual(PLANETS_DATA.results[0]);
  });

  it('should return error planet by id', async () => {
    const { result } = renderHook(() => useGetPlanetsById({ id: '1' }), {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });

    expect(result.current.data?.data).not.toStrictEqual(
      PLANETS_DATA.results[1]
    );
  });
});
