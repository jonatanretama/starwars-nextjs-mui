import { render } from '@testing-library/react';
import { Planets } from './planets';
import { MainProvider } from '@provider/main-provider';

describe('Planets', () => {
  it('should render Planets', () => {
    const { baseElement } = render(<Planets />, {
      wrapper: MainProvider,
    });

    expect(baseElement).toBeTruthy();
  });
});
