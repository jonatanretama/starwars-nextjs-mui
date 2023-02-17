import { render } from '@testing-library/react';
import { ButtonStyled } from './button-styled';
import { MainProvider } from '@provider/main-provider';

describe('ButtonStyled', () => {
  it('should click on button', () => {
    const { getByRole } = render(<ButtonStyled />, { wrapper: MainProvider });

    expect(getByRole('button', { name: 'Jonatan' })).toBeInTheDocument();
  });
});
