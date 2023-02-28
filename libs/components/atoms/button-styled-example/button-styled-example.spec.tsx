import { render } from '@testing-library/react';
import { ButtonStyledExample } from './button-styled-example';
import { MainProvider } from '@provider/main-provider';

describe('ButtonStyled', () => {
  it('should click on button', () => {
    const { getByRole } = render(<ButtonStyledExample />, {
      wrapper: MainProvider,
    });

    expect(getByRole('button', { name: 'Jonatan' })).toBeInTheDocument();
  });
});
