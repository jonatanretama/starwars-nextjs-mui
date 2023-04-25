import { useQuery, UseQueryOptions } from 'react-query';
import type { TFilmsAttrs, TSwapiError } from '@models';
import type { AxiosResponse } from 'axios';
import { swapiInstance } from '@api/swapi-api';

type TQueryData = AxiosResponse<TFilmsAttrs>;
type TOptions = UseQueryOptions<TQueryData, TSwapiError>;

export type UseGetFilmsByIdProps = {
  id: string;
  options?: TOptions;
};

export const useGetFilmsById = ({ id, options }: UseGetFilmsByIdProps) => {
  return useQuery<TQueryData, TSwapiError>(
    ['films', id],
    () => {
      return swapiInstance.request({
        method: 'get',
        url: `/films/${id}`,
      });
    },
    options
  );
};
