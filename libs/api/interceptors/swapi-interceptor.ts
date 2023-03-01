import type { AxiosResponse, AxiosError } from 'axios';
import type { SwapiError } from '@models';

export const SwapiInterceptor = {
  responseSuccess({ data, ...rest }: AxiosResponse) {
    return { ...rest, data };
  },
  responseError(axiosError: AxiosError<SwapiError>): Promise<AxiosError> {
    const response = axiosError?.response;
    console.error('Status', response?.status);
    console.error('Detail', response?.data?.detail);
    return Promise.reject(axiosError);
  },
};
