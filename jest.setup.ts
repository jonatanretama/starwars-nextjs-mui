/* eslint-disable @typescript-eslint/no-var-requires */
import { setupServer } from 'msw/node';
import type { SetupServerApi } from 'msw/node';
import { swappiHappyHandler } from './libs/mocks/handlers';

import '@testing-library/jest-dom/extend-expect';
import { setLogger } from 'react-query';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost';

jest.mock('next/dist/client/router', () => require('next-router-mock'));

jest.mock('next/dist/shared/lib/router-context', () => {
  const { createContext } = require('react');
  const router = require('next-router-mock').default;
  const RouterContext = createContext(router);
  return { RouterContext };
});

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
