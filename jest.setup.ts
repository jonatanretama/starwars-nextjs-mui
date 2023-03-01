import { setupServer } from 'msw/node';
import type { SetupServerApi } from 'msw/node';
import { swappiHappyHandler } from './libs/mocks/handlers';

import '@testing-library/jest-dom';
import { setLogger } from 'react-query';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost';

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => null,
});

const server: SetupServerApi = setupServer(...swappiHappyHandler);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export { server };
