import type { AxiosError } from 'axios';

export type SwapiError = {
  detail: string;
};

export type TSwapiError = AxiosError<SwapiError>;

export type TSwapiData = {
  count: number;
  next?: string | null;
  previous?: string | null;
};
