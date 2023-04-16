import { renderHook } from '@testing-library/react';
import { SWAPI_URL } from '../api-url-handler';

describe('SWAPI_URL', () => {
  it('should return the correct url', () => {
    const { result } = renderHook(() => SWAPI_URL('/people/'));
    expect(result.current).toBe('http://localhost/people/');
  });

  it('should return the correct url with a query string', () => {
    const { result } = renderHook(() => SWAPI_URL('/people/?page=2'));
    expect(result.current).toBe('http://localhost/people/?page=2');
  });

  it('should return the correct url with process env', () => {
    process.env['NEXT_PUBLIC_SWAPI_BASE_URL'] = 'http://test:3000';
    const { result } = renderHook(() => SWAPI_URL('/people/'));
    expect(result.current).toBe('http://test:3000/people/');
  });
});
