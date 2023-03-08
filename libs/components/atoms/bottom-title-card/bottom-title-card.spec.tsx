import { render } from '@testing-library/react';
import { BottomTitleCard } from './bottom-title-card';
import { MainProvider } from '@provider/main-provider';

describe('BottomTitleCard', () => {
  it('should render BottomTitleCard', () => {
    const { getByText } = render(<BottomTitleCard name="Luke Skywalker" />, {
      wrapper: MainProvider,
    });

    expect(getByText(/Luke Skywalker/i)).toBeInTheDocument();
  });
});
