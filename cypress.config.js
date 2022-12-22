const { defineConfig } = require("cypress");


module.exports = defineConfig({

  pageLoadTimeout: 30000,
  viewportHeight:  720,
  viewportWidth:   300,
  viewport:'iphone-5',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],
  },


});
