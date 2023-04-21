import { useQuery, UseQueryOptions } from 'react-query';
import type { TStarshipsAttrs, TSwapiError } from '@models';
import type { AxiosResponse } from 'axios';
import { swapiInstance } from '@api/swapi-api';

type TQueryData = AxiosResponse<TStarshipsAttrs>;
type TOptions = UseQueryOptions<TQueryData, TSwapiError>;

export type UseGetStarshipsByIdProps = {
  id: string;
  options?: TOptions;
};

export const useGetStarshipsById = ({
  id,
  options,
}: UseGetStarshipsByIdProps) => {
  return useQuery<TQueryData, TSwapiError>(
    ['starships', id],
    () => {
      return swapiInstance.request({
        method: 'get',
        url: `/starships/${id}`,
      });
    },
    options
  );
};
