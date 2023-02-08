import { useQuery, UseQueryOptions } from 'react-query';
import type { TPeopleAttrs, TSwapiError } from 'libs/models';
import type { AxiosResponse } from 'axios';
import { swapiInstance } from 'libs/api';

type TQueryData = AxiosResponse<TPeopleAttrs>;
type TOptions = UseQueryOptions<TQueryData, TSwapiError>;

export type UseGetPeopleByIdProps = {
  id: number;
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
