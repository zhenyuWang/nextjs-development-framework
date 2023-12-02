const { defineConfig } = require('cypress')
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:3000',
    supportFile: 'cypress/e2e/support/index.js',
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config)
    },
    trashAssetsBeforeRuns: true,
  },
})
