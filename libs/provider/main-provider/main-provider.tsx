import { FC, useMemo } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { CacheProvider } from '@emotion/react';
import type { EmotionCache } from '@emotion/cache';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createEmotionCache, theme } from '@ui/config';

const clientSideEmotionCache = createEmotionCache();

export type MainProviderProps = {
  children?: React.ReactNode;
  emotionCache?: EmotionCache;
};

export const MainProvider: FC<MainProviderProps> = ({
  children,
  emotionCache = clientSideEmotionCache,
}) => {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
      }),
    []
  );

  return (
    <CacheProvider value={emotionCache}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools position="bottom-right" />
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};
