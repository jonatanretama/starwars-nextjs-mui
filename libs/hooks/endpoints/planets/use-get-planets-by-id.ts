import { useQuery, UseQueryOptions } from 'react-query';
import type { TSwapiError, TPlanetsAttrs } from '@models';
import type { AxiosResponse } from 'axios';
import { swapiInstance } from '@api/swapi-api';

type TQueryData = AxiosResponse<TPlanetsAttrs>;
type TOptions = UseQueryOptions<TQueryData, TSwapiError>;

export type UseGetPlanetsByIdProps = {
  id: string;
  options?: TOptions;
};

export const useGetPlanetsById = ({ id, options }: UseGetPlanetsByIdProps) => {
  return useQuery<TQueryData, TSwapiError>(
    ['planets', id],
    () => {
      return swapiInstance.request({
        method: 'get',
        url: `/planets/${id}`,
      });
    },
    options
  );
};
