import { rest } from 'msw';

const prepareUrl = (baseUrl: string, path: string) => {
  const base = baseUrl || 'https://swapi.dev/api';

  return base + path;
};

const SWAPI_URL = (path: string) =>
  prepareUrl(process.env['NEXT_PUBLIC_SWAPI_BASE_URL'], path);

import { PEOPLE_DATA } from '../swapi';

export const peopleHandler = rest.get(
  SWAPI_URL('/people'),
  (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(PEOPLE_DATA));
  }
);

export const swapiHappyHandler = [peopleHandler];
