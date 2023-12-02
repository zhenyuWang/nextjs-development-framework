import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'

addMatchImageSnapshotCommand({
  failureThreshold: 0, // Threshold is 0%
  failureThresholdType: 'percent', // Threshold type
})

Cypress.Commands.add('login', (username, password) => {
  console.log('custom command login', username, password)
  return `${username} ${password}`
})

beforeEach(() => {
  console.log('cypress test before each')
})
