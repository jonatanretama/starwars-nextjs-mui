import { render, waitFor } from '@testing-library/react';
import { ButtonStyled } from './button-styled';
import { MainProvider } from '@provider/main-provider';

describe('ButtonStyled', () => {
  it('should click on button', async () => {
    const { getByRole } = render(<ButtonStyled />, { wrapper: MainProvider });

    await waitFor(() => expect(getByRole('button', { name: 'Jonatan' })));
  });
});
