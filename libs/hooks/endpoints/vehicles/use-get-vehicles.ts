import { useQuery, UseQueryOptions } from 'react-query';
import type { TVehiclesData, TSwapiError } from '@models';
import type { AxiosResponse } from 'axios';
import { swapiInstance } from '@api/swapi-api';

type TQueryData = AxiosResponse<TVehiclesData>;
type TOptions = UseQueryOptions<TQueryData, TSwapiError>;

export type UseGetVehiclesProps = {
  filters?: {
    search?: string;
    page?: number;
  };
  options?: TOptions;
};

export const useGetVehicles = ({ options, filters }: UseGetVehiclesProps) => {
  return useQuery<TQueryData, TSwapiError>(
    ['vehicles', filters],
    () => {
      return swapiInstance.request({
        method: 'get',
        url: '/vehicles',
        params: {
          ...filters,
        },
      });
    },
    options
  );
};
