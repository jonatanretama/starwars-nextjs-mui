import { renderHook, waitFor } from '@testing-library/react';
import { MainProvider } from '@provider';
import { useGetStarships } from './use-get-starships';
import { STARSHIPS_DATA, starshipsHandler } from '@mocks';
import { server } from 'jest.setup';

describe('useGetStarships', () => {
  beforeEach(() => {
    server.use(starshipsHandler);
  });
  it('should return starships data', async () => {
    const { result } = renderHook(() => useGetStarships({}), {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });

    expect(result.current.data?.data).toStrictEqual(STARSHIPS_DATA);
  });
});
