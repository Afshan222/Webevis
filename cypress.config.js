const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    adminUrl: "https://webevis.com/",
    fixtureFile: "dataFile.json",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
