import {
  render,
  RenderResult,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import { ContentType } from './content-type';
import { MainProvider } from '@provider/main-provider';
import mockRouter from 'next-router-mock';

describe('ContentType', () => {
  mockRouter.push('/people');
  let renderResult: RenderResult;

  const renderComponent = () => {
    renderResult = render(<ContentType />, {
      wrapper: MainProvider,
    });

    return renderResult;
  };
  it('should render successfully', () => {
    renderComponent();
    const { getByRole } = renderResult;
    expect(
      getByRole('img', { name: /picture of vehicles/i })
    ).toBeInTheDocument();
  });
});
