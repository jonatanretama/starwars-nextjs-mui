import { renderHook, waitFor } from '@testing-library/react';
import { MainProvider } from '@provider';
import { useGetFilms } from './use-get-films';
import { FILMS_DATA, filmsHandler } from '@mocks';
import { server } from 'jest.setup';

describe('useGetFilms', () => {
  beforeEach(() => {
    server.use(filmsHandler);
  });
  it('should return species data', async () => {
    const { result } = renderHook(() => useGetFilms({}), {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });

    expect(result.current.data?.data).toStrictEqual(FILMS_DATA);
  });
});
