import { useQuery, UseQueryOptions } from 'react-query';
import type { TPlanetsData, TSwapiError } from 'libs/models';
import type { AxiosResponse } from 'axios';
import { swapiInstance } from 'libs/api';

type TQueryData = AxiosResponse<TPlanetsData>;
type TOptions = UseQueryOptions<TQueryData, TSwapiError>;

export type UseGetPlanetsProps = {
  filters?: {
    search?: string;
    page?: string;
  };
  options?: TOptions;
};

export const useGetPlanets = ({ options, filters }: UseGetPlanetsProps) => {
  return useQuery<TQueryData, TSwapiError>(
    ['planets', filters],
    () => {
      return swapiInstance.request({
        method: 'get',
        url: '/planets',
        params: {
          ...filters,
        },
      });
    },
    options
  );
};
