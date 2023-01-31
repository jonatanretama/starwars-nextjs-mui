import type { AxiosResponse, AxiosError } from 'axios';

export const SwapiInterceptor = {
  responseSuccess({ data, ...rest }: AxiosResponse) {
    return { ...rest, data };
  },
  responseError(axiosError: AxiosError): Promise<AxiosError> {
    const status = axiosError?.response?.status;
    console.log('STATUS', status);
    return Promise.reject(axiosError);
  },
};
