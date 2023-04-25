import { useQuery, UseQueryOptions } from 'react-query';
import type { TVehiclesAttrs, TSwapiError } from '@models';
import type { AxiosResponse } from 'axios';
import { swapiInstance } from '@api/swapi-api';

type TQueryData = AxiosResponse<TVehiclesAttrs>;
type TOptions = UseQueryOptions<TQueryData, TSwapiError>;

export type UseGetVehiclesByIdProps = {
  id: string;
  options?: TOptions;
};

export const useGetVehiclesById = ({
  id,
  options,
}: UseGetVehiclesByIdProps) => {
  return useQuery<TQueryData, TSwapiError>(
    ['vehicles', id],
    () => {
      return swapiInstance.request({
        method: 'get',
        url: `/vehicles/${id}`,
      });
    },
    options
  );
};
