import { useQuery, UseQueryOptions } from 'react-query';
import type { PeopleData, TSwapiError } from 'libs/models';
import type { AxiosResponse } from 'axios';
import { swapiInstance } from 'libs/api';

type TQueryData = AxiosResponse<PeopleData>;
type TOptions = UseQueryOptions<TQueryData, TSwapiError>;

export type UseGetPeopleProps = {
  id?: string;
  filters?: {
    search?: string;
    page?: string;
  };
  options?: TOptions;
};

export const useGetPeople = ({
  id = '',
  options,
  filters,
}: UseGetPeopleProps) => {
  return useQuery<TQueryData, TSwapiError>(
    ['people', id, filters],
    () => {
      return swapiInstance.request({
        method: 'get',
        url: `/people${id && `/${id}`}`,
        params: {
          ...filters,
        },
      });
    },
    options
  );
};
