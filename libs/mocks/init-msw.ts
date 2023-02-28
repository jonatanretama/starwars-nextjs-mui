import type { RestHandler } from 'msw';

const browser = (handlers: RestHandler[]) => {
  /* eslint-disable-next-line @typescript-eslint/no-var-requires */
  const { setupWorker } = require('msw');

  return setupWorker(...handlers);
};

const server = (handlers: RestHandler[]) => {
  /* eslint-disable-next-line @typescript-eslint/no-var-requires */
  const { setupServer } = require('msw/node');

  return setupServer(...handlers);
};

export const initMSW = (handlers: RestHandler[]) => {
  if (typeof window === 'undefined') {
    server(handlers).listen({ onUnhandledRequest: 'bypass' });
  } else {
    browser(handlers).start({ onUnhandledRequest: 'bypass' });
  }
};
