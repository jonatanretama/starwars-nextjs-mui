import { useQuery, UseQueryOptions } from 'react-query';
import type { TFilmsData, TSwapiError } from '@models';
import type { AxiosResponse } from 'axios';
import { swapiInstance } from '@api/swapi-api';

type TQueryData = AxiosResponse<TFilmsData>;
type TOptions = UseQueryOptions<TQueryData, TSwapiError>;

export type UseGetFilmsProps = {
  filters?: {
    search?: string;
    page?: number;
  };
  options?: TOptions;
};

export const useGetFilms = ({ options, filters }: UseGetFilmsProps) => {
  return useQuery<TQueryData, TSwapiError>(
    ['films', filters],
    () => {
      return swapiInstance.request({
        method: 'get',
        url: '/films',
        params: {
          ...filters,
        },
      });
    },
    options
  );
};
