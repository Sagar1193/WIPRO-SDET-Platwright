// @ts-check
const { defineConfig, devices } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({

  testDir: './tests',

  timeout: 30000,

  fullyParallel: true,

  retries: 1,

  workers: 4,

  reporter: [
    ['html'],
    ['allure-playwright']
  ],

  use: {

    baseURL: process.env.BASE_URL,

    headless: false,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

    actionTimeout: 10000,

    navigationTimeout: 15000,
  },

  projects: [

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});