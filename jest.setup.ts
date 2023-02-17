/* eslint-disable @typescript-eslint/no-explicit-any */
// import '@testing-library/jest-dom/extend-expect';

import { setupServer } from 'msw/node';
import type { SetupServerApi } from 'msw/node';
import { swapiHappyHandler } from '@mocks';

import { useMemo } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import '@testing-library/jest-dom';
import { setLogger } from 'react-query';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost';

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => null,
});

jest.mock('@provider/main-provider'),
  () => {
    return {
      MainProvider: ({ children }: { children: any }) => {
        const queryClient = useMemo(
          () =>
            new QueryClient({
              defaultOptions: {
                queries: {
                  refetchOnWindowFocus: false,
                  retry: false,
                },
              },
            }),
          []
        );

        return QueryClientProvider({ client: queryClient, children });
      },
    };
  };

const server: SetupServerApi = setupServer(...swapiHappyHandler);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export { server };
