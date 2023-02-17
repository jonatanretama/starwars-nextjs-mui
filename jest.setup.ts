import { setupServer } from 'msw/node';
import type { SetupServerApi } from 'msw/node';
import { swapiHappyHandler } from './libs/mocks/handlers/swapi-handler';

import '@testing-library/jest-dom';
import { setLogger } from 'react-query';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost';

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => null,
});

const server: SetupServerApi = setupServer(...swapiHappyHandler);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export { server };
