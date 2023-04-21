import { render, RenderResult } from '@testing-library/react';
import { MainProvider } from '@provider/main-provider';
import { ListCards } from './list-cards';
import type { TResultsData } from '@models';
import { PEOPLE_DATA, PLANETS_DATA, FILMS_DATA } from '@mocks';

describe('ListCards', () => {
  let renderResult: RenderResult;

  const renderComponent = ({ results }: TResultsData) => {
    renderResult = render(<ListCards results={results} />, {
      wrapper: MainProvider,
    });

    return renderResult;
  };
  it('should render ListCards with People Data', () => {
    renderComponent({ results: PEOPLE_DATA.results });

    expect(renderResult.getByText(/luke skywalker/i)).toBeInTheDocument();
    expect(renderResult.getByText(/c-3po/i)).toBeInTheDocument();
  });

  it('should render ListCards with Planets Data', () => {
    renderComponent({ results: PLANETS_DATA.results });

    expect(renderResult.getByText(/tatooine/i)).toBeInTheDocument();
    expect(renderResult.getByText(/alderaan/i)).toBeInTheDocument();
  });

  it('should render ListCards with Films Data', () => {
    renderComponent({ results: FILMS_DATA.results });

    expect(renderResult.getByText(/a new hope/i)).toBeInTheDocument();
    expect(
      renderResult.getByText(/The Empire Strikes Back/i)
    ).toBeInTheDocument();
  });
});
