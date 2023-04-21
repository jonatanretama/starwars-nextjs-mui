import { useQuery, UseQueryOptions } from 'react-query';
import type { TStarshipsData, TSwapiError } from '@models';
import type { AxiosResponse } from 'axios';
import { swapiInstance } from '@api/swapi-api';

type TQueryData = AxiosResponse<TStarshipsData>;
type TOptions = UseQueryOptions<TQueryData, TSwapiError>;

export type UseGetStarshipsProps = {
  filters?: {
    search?: string;
    page?: number;
  };
  options?: TOptions;
};

export const useGetStarships = ({ options, filters }: UseGetStarshipsProps) => {
  return useQuery<TQueryData, TSwapiError>(
    ['starships', filters],
    () => {
      return swapiInstance.request({
        method: 'get',
        url: '/starships',
        params: {
          ...filters,
        },
      });
    },
    options
  );
};
