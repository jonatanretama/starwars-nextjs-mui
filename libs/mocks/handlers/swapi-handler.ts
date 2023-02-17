import { rest } from 'msw';
import { SWAPI_URL } from '@utils/api-url-handler';
import { PEOPLE_DATA } from '../swapi-data';

export const peopleHandler = rest.get(
  SWAPI_URL('/people'),
  (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(PEOPLE_DATA));
  }
);

export const peopleByIdHandler = rest.get(
  SWAPI_URL('/people/:id'),
  (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(PEOPLE_DATA.results[0]));
  }
);

export const swapiHappyHandler = [peopleHandler, peopleByIdHandler];
