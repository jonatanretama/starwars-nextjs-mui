import { renderHook } from '@testing-library/react';
import { capitalizedKeysArr } from '../capitalized-keys';
import { MainProvider } from '@provider/main-provider';

describe('capitalizedKeysArr', () => {
  it('should return an array of objects with capitalized keys', () => {
    const { result } = renderHook(
      () =>
        capitalizedKeysArr({
          name: 'Luke Skywalker',
          height: '172',
          mass: '77',
          hair_color: 'blond',
        }),
      { wrapper: MainProvider }
    );
    expect(result.current).toEqual([
      { keyName: 'Name', value: 'Luke Skywalker' },
      { keyName: 'Height', value: '172' },
      { keyName: 'Mass', value: '77' },
      { keyName: 'Hair color', value: 'blond' },
    ]);
  });
});
