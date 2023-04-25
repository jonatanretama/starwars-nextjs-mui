import { rest } from 'msw';
import { SWAPI_URL } from '@utils/api-url-handler';
import { SPECIES_DATA } from '../swapi-data';

export const speciesHandler = rest.get(
  SWAPI_URL('/species'),
  (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(SPECIES_DATA));
  }
);

export const speciesByIdHandler = rest.get(
  SWAPI_URL('/species/:id'),
  (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(SPECIES_DATA.results[0]));
  }
);

export const speciesHappyHandler = [speciesHandler, speciesByIdHandler];
