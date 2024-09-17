// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './src/tests',  // Set the directory for Playwright tests
    timeout: 30000,  // Default timeout for tests
    retries: 1,  // Retry failed tests once
    use: {
        headless: true,  // Run tests in headless mode
        viewport: { width: 1280, height: 720 },
        actionTimeout: 0,
        ignoreHTTPSErrors: true,
    },
});
