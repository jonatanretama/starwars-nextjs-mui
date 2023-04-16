import { renderHook } from '@testing-library/react';
import {
  getSwapiId,
  getSwapiPageNumber,
  getLengthForPagination,
} from '../get-swapi-url-data';

describe('get swapi url data methods', () => {
  describe('getSwapiId', () => {
    it('should return the correct id', () => {
      const { result } = renderHook(() =>
        getSwapiId('http://localhost/people/1/')
      );
      expect(result.current).toBe('1');
    });

    it('should return the correct id with a query string', () => {
      const { result } = renderHook(() =>
        getSwapiId('http://localhost/people/1/?page=2')
      );
      expect(result.current).toBe('1');
    });

    it('should return the correct id with process env', () => {
      process.env['NEXT_PUBLIC_SWAPI_BASE_URL'] = 'http://test:3000';
      const { result } = renderHook(() =>
        getSwapiId('http://test:3000/people/1/')
      );
      expect(result.current).toBe('1');
    });
  });

  describe('getSwapiPageNumber', () => {
    it('should return the correct page number', () => {
      const { result } = renderHook(() =>
        getSwapiPageNumber('http://localhost/people/?page=2')
      );
      expect(result.current).toBe('2');
    });

    it('should return the correct page number with a query string', () => {
      const { result } = renderHook(() =>
        getSwapiPageNumber('http://localhost/people/?page=25')
      );
      expect(result.current).toBe('25');
    });

    it('should return the correct page number with process env', () => {
      process.env['NEXT_PUBLIC_SWAPI_BASE_URL'] = 'http://test:3000';
      const { result } = renderHook(() =>
        getSwapiPageNumber('http://test:3000/people/?page=13')
      );
      expect(result.current).toBe('13');
    });
  });

  describe('getLengthForPagination', () => {
    it('should return the correct length', () => {
      const { result } = renderHook(() => getLengthForPagination(10));
      expect(result.current).toBe(1);
    });
    it('should return the incorrect length', () => {
      const { result } = renderHook(() => getLengthForPagination(0));
      expect(result.current).toBe(10);
    });

    it('should return the correct length with a query string', () => {
      const { result } = renderHook(() => getLengthForPagination(20));
      expect(result.current).toBe(2);
    });

    it('should return the correct length with process env', () => {
      process.env['NEXT_PUBLIC_SWAPI_BASE_URL'] = 'http://test:3000';
      const { result } = renderHook(() => getLengthForPagination(30));
      expect(result.current).toBe(3);
    });
  });
});
