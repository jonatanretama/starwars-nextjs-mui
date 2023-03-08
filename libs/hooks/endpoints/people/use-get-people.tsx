import { useQuery, UseQueryOptions } from 'react-query';
import type { TPeopleData, TSwapiError } from '@models';
import type { AxiosResponse } from 'axios';
import { swapiInstance } from '@api/swapi-api';

type TQueryData = AxiosResponse<TPeopleData>;
type TOptions = UseQueryOptions<TQueryData, TSwapiError>;

export type UseGetPeopleProps = {
  filters?: {
    search?: string;
    page?: string;
  };
  options?: TOptions;
};

export const useGetPeople = ({ options, filters }: UseGetPeopleProps) => {
  return useQuery<TQueryData, TSwapiError>(
    ['people', filters],
    () => {
      return swapiInstance.request({
        method: 'get',
        url: '/people',
        params: {
          ...filters,
        },
      });
    },
    options
  );
};
