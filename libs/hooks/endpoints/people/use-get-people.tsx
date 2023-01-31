import { useQuery, UseQueryOptions } from 'react-query';
import type { PeopleData } from 'libs/models';
import type { AxiosResponse, AxiosError } from 'axios';
import { swapiInstance } from 'libs/api';

type TQueryFnData = AxiosResponse<PeopleData, any>;
type TOptions = UseQueryOptions<TQueryFnData, AxiosError>;

export type UseGetPeopleProps = {
  id?: string;
  options?: TOptions;
};

export const useGetPeople = ({ id, options }: UseGetPeopleProps) => {
  return useQuery<TQueryFnData, AxiosError>(
    ['people', id],
    () => {
      return swapiInstance.request({
        method: 'get',
        url: '/people',
      });
    },
    options
  );
};
