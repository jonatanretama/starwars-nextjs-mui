import { renderHook, waitFor } from '@testing-library/react';
import { MainProvider } from '@provider';
import { useGetVehicles } from './use-get-vehicles';
import { VEHICLES_DATA, vehiclesHandler } from '@mocks';
import { server } from 'jest.setup';

describe('useGetVehicles', () => {
  beforeEach(() => {
    server.use(vehiclesHandler);
  });
  it('should return vehicles data', async () => {
    const { result } = renderHook(() => useGetVehicles({}), {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });

    expect(result.current.data?.data).toStrictEqual(VEHICLES_DATA);
  });
});
