import { render } from '@testing-library/react';
import { SpatialLayout } from './spatial-layout';
import { MainProvider } from '@provider/main-provider';

describe('SpatialLayout', () => {
  it('should render SpatialLayout', () => {
    const { getByText } = render(<SpatialLayout>content</SpatialLayout>, {
      wrapper: MainProvider,
    });

    expect(getByText(/content/i)).toBeInTheDocument();
  });
});
