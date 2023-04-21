import { useQuery, UseQueryOptions } from 'react-query';
import type { TSpeciesData, TSwapiError } from '@models';
import type { AxiosResponse } from 'axios';
import { swapiInstance } from '@api/swapi-api';

type TQueryData = AxiosResponse<TSpeciesData>;
type TOptions = UseQueryOptions<TQueryData, TSwapiError>;

export type UseGetSpeciesProps = {
  filters?: {
    search?: string;
    page?: number;
  };
  options?: TOptions;
};

export const useGetSpecies = ({ options, filters }: UseGetSpeciesProps) => {
  return useQuery<TQueryData, TSwapiError>(
    ['species', filters],
    () => {
      return swapiInstance.request({
        method: 'get',
        url: '/species',
        params: {
          ...filters,
        },
      });
    },
    options
  );
};
