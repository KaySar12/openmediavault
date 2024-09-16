import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://172.20.60.244:4201',
    fixturesFolder: false
  },
  env: {
    username: 'test',
    password: 'test'
  }
});
