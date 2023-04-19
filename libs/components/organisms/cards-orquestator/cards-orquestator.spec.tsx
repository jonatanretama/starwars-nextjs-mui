import { render, fireEvent } from '@testing-library/react';
import { CardsOrquestator } from './cards-orquestator';
import { PEOPLE_DATA } from '@mocks';
import { MainProvider } from '@provider/main-provider';

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/people',
  }),
}));

describe('CardsOrquestator', () => {
  const mockFn = jest.fn();
  it('should render CardsOrquestator and click on pagination', async () => {
    const { getByText, getByLabelText } = render(
      <CardsOrquestator
        results={PEOPLE_DATA.results}
        setPage={() => mockFn}
        countTotalItems={13}
        page={1}
      />,
      { wrapper: MainProvider }
    );

    const pagination = getByLabelText(/go to page 2/i);
    await fireEvent.click(pagination);

    expect(getByText(/Luke Skywalker/i)).toBeInTheDocument();
    expect(getByText(/C-3PO - 2/i)).toBeInTheDocument();
  });
});
