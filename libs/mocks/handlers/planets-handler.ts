import { rest } from 'msw';
import { SWAPI_URL } from '@utils/api-url-handler';
import { PLANETS_DATA } from '../swapi-data';

export const planetsHandler = rest.get(
  SWAPI_URL('/planets'),
  (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(PLANETS_DATA));
  }
);

export const planetsByIdHandler = rest.get(
  SWAPI_URL('/planets/:id'),
  (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(PLANETS_DATA.results[0]));
  }
);

export const planetsHappyHandler = [planetsHandler, planetsByIdHandler];
