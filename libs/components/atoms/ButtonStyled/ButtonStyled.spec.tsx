import { render } from '@testing-library/react';
import { ButtonStyled } from './ButtonStyled';
import MainProvider from '../../../provider/src/main-provider/main-provider';
// import MainProvider from '@provider/main-provider/main-provider';

describe('ButtonStyled', () => {
  it('should click on button', async () => {
    const { getByRole } = render(<ButtonStyled />, { wrapper: MainProvider });

    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
