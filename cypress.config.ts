import { defineConfig } from 'cypress';

export default defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 14000,
  requestTimeout: 14000,
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
});
