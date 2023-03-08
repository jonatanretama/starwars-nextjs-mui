import { MainProvider } from '@provider/main-provider';
import { withQuery } from '@storybook/addon-queryparams';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider/next-13'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { initialize, mswDecorator } from 'msw-storybook-addon'
import { action } from '@storybook/addon-actions'

export const parameters = {
  backgrounds: {
    default: 'light',
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Example', 'Atoms', 'Molecules', 'Organisms', 'Pages'],
    }
  },
  layout: 'fullscreen',
}

initialize({
  onUnhandledRequest: 'bypass'
})

export const decorators = [
  (Story: any) => (
    <MainProvider>
      <Story />
    </MainProvider>
  ),
  withQuery,
  mswDecorator,
  (Story: any) => (
    <MemoryRouterProvider
      async
      onPush={action('push')}
      onReplace={action('replace')}
      onRouteChangeStart={action('routeChangeStart')}
      onRouteChangeComplete={action('routeChangeComplete')}>
      <Story />
    </MemoryRouterProvider>
  ),

];
