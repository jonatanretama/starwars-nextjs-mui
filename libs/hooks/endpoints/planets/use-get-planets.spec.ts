import { renderHook, waitFor } from '@testing-library/react';
import { MainProvider } from '@provider';
import { useGetPlanets } from './use-get-planets';
import { PLANETS_DATA } from '@mocks';

describe('useGetPlanets', () => {
  it('should return planets data', async () => {
    const { result } = renderHook(() => useGetPlanets({}), {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });

    expect(result.current.data?.data).toStrictEqual(PLANETS_DATA);
  });
});
