const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ocx94s",
  e2e: {
    baseUrl: "http://qamid.tmweb.ru",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
