import { useQuery, UseQueryOptions } from 'react-query';
import type { TSpeciesAttrs, TSwapiError } from '@models';
import type { AxiosResponse } from 'axios';
import { swapiInstance } from '@api/swapi-api';

type TQueryData = AxiosResponse<TSpeciesAttrs>;
type TOptions = UseQueryOptions<TQueryData, TSwapiError>;

export type UseGetSpeciesByIdProps = {
  id: string;
  options?: TOptions;
};

export const useGetSpeciesById = ({ id, options }: UseGetSpeciesByIdProps) => {
  return useQuery<TQueryData, TSwapiError>(
    ['species', id],
    () => {
      return swapiInstance.request({
        method: 'get',
        url: `/species/${id}`,
      });
    },
    options
  );
};
