// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.ordero.lt',
  trailingSlash: 'ignore',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  i18n: {
    locales: ['lt', 'en', 'pl'],
    defaultLocale: 'lt',
    routing: { prefixDefaultLocale: false },
  },
});
