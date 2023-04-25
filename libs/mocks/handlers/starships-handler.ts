import { rest } from 'msw';
import { SWAPI_URL } from '@utils/api-url-handler';
import { STARSHIPS_DATA } from '../swapi-data';

export const starshipsHandler = rest.get(
  SWAPI_URL('/starships'),
  (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(STARSHIPS_DATA));
  }
);

export const starshipsByIdHandler = rest.get(
  SWAPI_URL('/starships/:id'),
  (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(STARSHIPS_DATA.results[0]));
  }
);

export const starshipsHappyHandler = [starshipsHandler, starshipsByIdHandler];
