import type { AxiosError } from 'axios';

export type SwapiError = {
  detail: string;
};

export type TSwapiError = AxiosError<SwapiError>;
