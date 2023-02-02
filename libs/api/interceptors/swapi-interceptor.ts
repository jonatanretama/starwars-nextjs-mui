import type { AxiosResponse, AxiosError } from 'axios';
import type { SwapiError } from 'libs/models';

export const SwapiInterceptor = {
  responseSuccess({ data, ...rest }: AxiosResponse) {
    return { ...rest, data };
  },
  responseError(axiosError: AxiosError<SwapiError>): Promise<AxiosError> {
    const response = axiosError?.response;
    console.log('Status', response?.status);
    console.log('Detail', response?.data?.detail);
    return Promise.reject(axiosError);
  },
};
