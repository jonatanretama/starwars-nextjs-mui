import { render, renderHook, waitFor } from '@testing-library/react';
import { useQuery } from 'react-query';
import { rest } from 'msw';

import { server } from 'jest.setup';
import { MainProvider } from './main-provider';
import { createEmotionCache } from '@ui/config';
import axios from 'axios';

describe('MainProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainProvider />);
    expect(baseElement).toBeTruthy();
  });

  describe('emotion cache', () => {
    it('ssr passing emotion cache prop', () => {
      const emotionCache = createEmotionCache();
      const { baseElement } = render(
        <MainProvider emotionCache={emotionCache} />
      );
      expect(baseElement).toBeTruthy();
    });
  });

  describe('react query', () => {
    const successHandler = rest.get('/apiMock', (_req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json({
          data: {
            type: 'test',
            attributes: { name: 'test-name' },
          },
        })
      )
    );

    const errorHandler = rest.get('/apiMock', (_req, res, ctx) =>
      res(
        ctx.status(400),
        ctx.json({
          errors: [{ detail: 'Internal Server Error' }],
        })
      )
    );

    const callEndpoint = () =>
      renderHook(
        () =>
          useQuery('test', () =>
            axios.request({ method: 'get', url: '/apiMock' })
          ),
        { wrapper: MainProvider }
      );

    it('should render with empty cache', async () => {
      server.use(successHandler);
      const { result } = callEndpoint();
      await waitFor(() => {
        expect(result.current.isSuccess).toBeTruthy();
        expect(result.current.isError).toBeFalsy();
        expect(result.current.data).toBeDefined();
        expect(result.current.error).toBeNull();
      });
    });

    it('should render with error', async () => {
      server.use(errorHandler);
      const { result } = callEndpoint();
      await waitFor(() => {
        expect(result.current.isSuccess).toBeFalsy();
        expect(result.current.isError).toBeTruthy();
        expect(result.current.data).toBeUndefined();
        expect(result.current.error).toBeDefined();
      });
    });
  });
});
