import { rest } from 'msw';
import { SWAPI_URL } from '@utils/api-url-handler';
import { FILMS_DATA } from '../swapi-data';

export const filmsHandler = rest.get(SWAPI_URL('/films'), (_req, res, ctx) => {
  return res(ctx.status(200), ctx.json(FILMS_DATA));
});

export const filmsByIdHandler = rest.get(
  SWAPI_URL('/films/:id'),
  (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(FILMS_DATA.results[0]));
  }
);

export const filmsHappyHandler = [filmsHandler, filmsByIdHandler];
