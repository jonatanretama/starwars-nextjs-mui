import { render } from '@testing-library/react';
import { PeopleContent } from './people-content';
import { MainProvider } from '@provider/main-provider';

describe('PeopleContent', () => {
  it('should render PeopleContent', () => {
    const { getByText } = render(
      <PeopleContent planetName="tatooine" planetId="1" keyName="Homeworld" />,
      {
        wrapper: MainProvider,
      }
    );

    expect(getByText(/Homeworld/i)).toBeInTheDocument();
    expect(getByText(/tatooine/i)).toBeInTheDocument();
  });

  it('should render PeopleContent without planet values', () => {
    const { getByText } = render(
      <PeopleContent keyName="Gender" value="male" />,
      {
        wrapper: MainProvider,
      }
    );

    expect(getByText(/gender/i)).toBeInTheDocument();
    expect(getByText(/male/i)).toBeInTheDocument();
  });
});
