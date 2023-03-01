/* eslint-disable @typescript-eslint/no-explicit-any */
import { SwapiInterceptor } from './swapi-interceptor';
import { SwapiError } from '@models';
import type { AxiosResponse, AxiosError } from 'axios';

describe('SwapiInterceptor', () => {
  it('should return succesful response', () => {
    const response = {
      data: {
        results: [{ name: 'Luke Skywalker' }],
      },
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };

    const result = SwapiInterceptor.responseSuccess(response as AxiosResponse);
    expect(result.data).toEqual(response.data);
    expect(result.status).toEqual(response.status);
    expect(result.statusText).toEqual(response.statusText);
    expect(result.headers).toEqual(response.headers);
    expect(result.config).toEqual(response.config);
  });

  it('should return error response', async () => {
    const error: AxiosError<SwapiError> = {
      name: 'Error',
      message: 'Request failed',
      config: {} as any,
      isAxiosError: true,
      toJSON: jest.fn(),
      response: {
        data: {
          detail: 'Invalid query parameter',
        },
        status: 400,
        statusText: 'Bad Request',
        headers: {},
        config: {} as any,
      },
    };

    console.error = jest.fn();

    let result;
    try {
      await SwapiInterceptor.responseError(error);
    } catch (error) {
      result = error as AxiosError<SwapiError>;
    }
    expect(result.message).toEqual('Request failed');
    expect(console.error).toHaveBeenCalledWith(
      'Status',
      error.response?.status
    );
    expect(console.error).toHaveBeenCalledWith(
      'Detail',
      error.response?.data?.detail
    );
  });
});
