import {
  render,
  RenderResult,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import { ResumeCard, TResumeCardProps } from './resume-card';
import { MainProvider } from '@provider/main-provider';
import mockRouter from 'next-router-mock';

describe('ResumeCard', () => {
  mockRouter.push('/people');
  let renderResult: RenderResult;

  const renderComponent = (props: TResumeCardProps) => {
    renderResult = render(<ResumeCard {...props} />, {
      wrapper: MainProvider,
    });

    return renderResult;
  };
  it('should render successfully', () => {
    renderComponent({ id: '1', name: 'Anakin Skywalker' });
    const { getByRole } = renderResult;
    expect(
      getByRole('img', { name: /picture of anakin/i })
    ).toBeInTheDocument();
  });

  it('should push to dynamic page', async () => {
    renderComponent({ id: '1', name: 'Anakin Skywalker' });
    const { getByTestId } = renderResult;

    const card = getByTestId('resume-card');

    await fireEvent.click(card);

    await waitFor(() => {
      expect(mockRouter).toMatchObject({
        pathname: '/people/1',
      });
    });
  });
});
