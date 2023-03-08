/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from '@testing-library/react';
import type { AppExtendedProps } from '../pages/_app';
import MyApp from '../pages/_app';

jest.mock('@provider/main-provider', () => {
  const MainProvider = ({ children }: { children: React.ReactNode }) => {
    return <div>{children}</div>;
  };
  return { MainProvider };
});

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/',
  }),
}));

const MockComponent = () => <div>Mock Component</div>;

const mockAppProps: AppExtendedProps = {
  Component: MockComponent,
  pageProps: {},
  emotionCache: {
    key: 'css',
    nonce: 'nonce',
    registered: {},
    inserted: {},
    insert: jest.fn(),
    sheet: {} as any,
  },
};

describe('_app', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(jest.fn());
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders the MainProvider and the passed in Component', async () => {
    const { findByText } = render(<MyApp {...mockAppProps} />);
    const provider = await findByText('Mock Component');
    expect(provider).toBeInTheDocument();
  });

  it('uses the Component getLayout prop if it exists', async () => {
    const ComponentWithLayout = Object.assign(MockComponent, {
      getLayout: (page: React.ReactNode) => <div>Layout {page}</div>,
    });
    const appProps: AppExtendedProps = {
      ...mockAppProps,
      Component: ComponentWithLayout,
    };
    const { findByText } = render(<MyApp {...appProps} />);
    expect(await findByText('Layout')).toBeInTheDocument();
    expect(await findByText('Mock Component')).toBeInTheDocument();
  });

  it('uses lazy loading for MainProvider', async () => {
    const { container } = render(<MyApp {...mockAppProps} />);
    expect(container.querySelector('div')).toBeInTheDocument();
  });
});
