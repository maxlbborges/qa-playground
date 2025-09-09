const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // URL da instância própria do bugbank.
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
