import { render, RenderResult } from '@testing-library/react';
import { PaginationCard, TPaginationCardProps } from './pagination-card';
import { MainProvider } from '@provider/main-provider';

describe('PaginationCard', () => {
  let renderResult: RenderResult;

  const renderComponent = ({
    getLengthForPagination,
    page = 1,
  }: TPaginationCardProps) => {
    renderResult = render(
      <PaginationCard
        getLengthForPagination={getLengthForPagination}
        page={page}
      />,
      {
        wrapper: MainProvider,
      }
    );

    return renderResult;
  };
  it('should render PaginationCard', () => {
    renderComponent({ getLengthForPagination: () => 15, page: 1 });

    expect(renderResult.getAllByLabelText(/page 1/i)[0]).toBeInTheDocument();
    expect(renderResult.getByLabelText(/go to page 15/i)).toBeInTheDocument();
  });
});
