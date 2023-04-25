import { rest } from 'msw';
import { SWAPI_URL } from '@utils/api-url-handler';
import { VEHICLES_DATA } from '../swapi-data';

export const vehiclesHandler = rest.get(
  SWAPI_URL('/vehicles'),
  (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(VEHICLES_DATA));
  }
);

export const vehiclesByIdHandler = rest.get(
  SWAPI_URL('/vehicles/:id'),
  (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(VEHICLES_DATA.results[0]));
  }
);

export const vehiclesHappyHandler = [vehiclesHandler, vehiclesByIdHandler];
