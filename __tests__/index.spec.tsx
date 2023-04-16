import Home from '../pages/index';
import { render } from '@testing-library/react';
import { MainProvider } from '@provider/main-provider';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Home />, { wrapper: MainProvider });
    expect(baseElement).toBeTruthy();
  });

  it('should render PeopleCardDetails', () => {
    const { getByRole } = render(<Home />, { wrapper: MainProvider });
    expect(getByRole('img', { name: /imagen/i })).toBeInTheDocument();
  });
});
