import { renderHook, waitFor } from '@testing-library/react';
import { MainProvider } from '@provider';
import { useGetStarshipsById } from './use-get-starships-by-id';
import { STARSHIPS_DATA, starshipsByIdHandler } from '@mocks';
import { server } from 'jest.setup';

describe('useGetStarshipsById', () => {
  beforeEach(() => {
    server.use(starshipsByIdHandler);
  });

  it('should return starships details by id', async () => {
    const { result } = renderHook(() => useGetStarshipsById({ id: '1' }), {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });

    expect(result.current.data?.data).toStrictEqual(STARSHIPS_DATA.results[0]);
  });

  it('should return error starships details by id', async () => {
    const { result } = renderHook(() => useGetStarshipsById({ id: '1' }), {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });

    expect(result.current.data?.data).not.toStrictEqual(
      STARSHIPS_DATA.results[1]
    );
  });
});
