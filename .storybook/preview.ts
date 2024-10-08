import { initialize, mswLoader } from 'msw-storybook-addon';

// MSW 초기화
initialize();

export const loaders = [mswLoader];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  msw: {
    handlers: [
      // 여기에 handlers를 import하여 추가
      ...require('../src/shared/api/msw/handlers').handlers,
    ],
  },
};
