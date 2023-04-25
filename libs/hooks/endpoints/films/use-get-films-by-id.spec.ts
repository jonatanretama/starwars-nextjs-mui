import { renderHook, waitFor } from '@testing-library/react';
import { MainProvider } from '@provider';
import { useGetFilmsById } from './use-get-films-by-id';
import { FILMS_DATA, filmsByIdHandler } from '@mocks';
import { server } from 'jest.setup';

describe('useGetFilmsById', () => {
  beforeEach(() => {
    server.use(filmsByIdHandler);
  });

  it('should return films details by id', async () => {
    const { result } = renderHook(() => useGetFilmsById({ id: '1' }), {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });

    expect(result.current.data?.data).toStrictEqual(FILMS_DATA.results[0]);
  });

  it('should return error films details by id', async () => {
    const { result } = renderHook(() => useGetFilmsById({ id: '1' }), {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });

    expect(result.current.data?.data).not.toStrictEqual(FILMS_DATA.results[1]);
  });
});
