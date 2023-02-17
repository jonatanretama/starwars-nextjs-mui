import { useQuery, UseQueryOptions } from 'react-query';
import type { TPeopleAttrs, TSwapiError } from '@models';
import type { AxiosResponse } from 'axios';
import { swapiInstance } from '@api/swapi-api';

type TQueryData = AxiosResponse<TPeopleAttrs>;
type TOptions = UseQueryOptions<TQueryData, TSwapiError>;

export type UseGetPeopleByIdProps = {
  id: string;
  options?: TOptions;
};

export const useGetPeopleById = ({ id, options }: UseGetPeopleByIdProps) => {
  return useQuery<TQueryData, TSwapiError>(
    ['people', id],
    () => {
      return swapiInstance.request({
        method: 'get',
        url: `/people/${id}`,
      });
    },
    options
  );
};
