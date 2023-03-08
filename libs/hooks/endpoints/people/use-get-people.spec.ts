import { renderHook, waitFor } from '@testing-library/react';
import { MainProvider } from '@provider';
import { useGetPeople } from './use-get-people';
import { PEOPLE_DATA } from '@mocks';
import { server } from 'jest.setup';
import { peopleHandler } from '@mocks';

describe('useGetPeople', () => {
  beforeEach(() => {
    server.use(peopleHandler);
  });
  it('should return people data', async () => {
    const { result } = renderHook(() => useGetPeople({}), {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });

    expect(result.current.data?.data).toStrictEqual(PEOPLE_DATA);
  });
});
