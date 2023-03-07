import { renderHook, waitFor } from '@testing-library/react';
import { MainProvider } from '@provider';
import { useGetPeopleById } from './use-get-people-by-id';
import { PEOPLE_DATA } from '@mocks';
import { peopleByIdHandler } from '@mocks';
import { server } from 'jest.setup';

describe('useGetPeopleById', () => {
  beforeEach(() => {
    server.use(peopleByIdHandler);
  });

  it('should return people details by id', async () => {
    const { result } = renderHook(() => useGetPeopleById({ id: '1' }), {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });

    expect(result.current.data?.data).toStrictEqual(PEOPLE_DATA.results[0]);
  });

  it('should return error people details by id', async () => {
    const { result } = renderHook(() => useGetPeopleById({ id: '1' }), {
      wrapper: MainProvider,
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });

    expect(result.current.data?.data).not.toStrictEqual(PEOPLE_DATA.results[1]);
  });
});
