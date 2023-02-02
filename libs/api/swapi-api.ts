import axios from 'axios';
import { SwapiInterceptor } from './interceptors';

const axiosInstance = axios.create({
  baseURL: process.env['NEXT_PUBLIC_SWAPI_BASE_URL'],
});

axiosInstance.interceptors.response.use(
  SwapiInterceptor.responseSuccess,
  SwapiInterceptor.responseError
);

export const swapiInstance = axiosInstance;
