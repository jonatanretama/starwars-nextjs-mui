import type { NextPage } from 'next';
import type { EmotionCache } from '@emotion/cache';
import { lazy, Suspense, ReactNode } from 'react';
import { AppInitialProps } from 'next/app';

const MainProvider = lazy(async () => {
  const { MainProvider } = await import('@provider/main-provider');

  return { default: MainProvider };
});

export type AppExtendedProps = AppInitialProps & {
  emotionCache: EmotionCache;
  Component: NextPage & {
    getLayout?: (page: ReactNode) => ReactNode;
  };
};

export default function MyApp({
  Component,
  pageProps,
  emotionCache,
}: AppExtendedProps) {
  const getLayout = Component.getLayout || (page => page);
  return (
    <Suspense>
      <MainProvider emotionCache={emotionCache}>
        {getLayout(<Component {...pageProps} />)}
      </MainProvider>
    </Suspense>
  );
}
