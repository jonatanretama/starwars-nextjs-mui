import { renderHook, waitFor } from '@testing-library/react';
import { MainProvider } from '@provider';
import { useGetVehiclesById } from './use-get-vehicles-by-id';
import { VEHICLES_DATA, vehiclesByIdHandler } from '@mocks';
import { server } from 'jest.setup';

describe('useGetVehiclesById', () => {
  beforeEach(() => {
    server.use(vehiclesByIdHandler);
  });

  it('should return vehicles details by id', async () => {
    const { result } = renderHook(() => useGetVehiclesById({ id: '1' }), {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });

    expect(result.current.data?.data).toStrictEqual(VEHICLES_DATA.results[0]);
  });

  it('should return error vehicles details by id', async () => {
    const { result } = renderHook(() => useGetVehiclesById({ id: '1' }), {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });

    expect(result.current.data?.data).not.toStrictEqual(
      VEHICLES_DATA.results[1]
    );
  });
});
