import { render } from '@testing-library/react';
import { ChevronButton } from './chevron-button';
import { MainProvider } from '@provider/main-provider';

describe('ChevronButton', () => {
  it('should render ChevronButton', () => {
    const { baseElement } = render(<ChevronButton />, {
      wrapper: MainProvider,
    });

    expect(baseElement).toBeTruthy();
  });
});
