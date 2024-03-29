// jest.config.js
module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  // node-exports-resolver is needed to support firebase-admin
  resolver: 'jest-node-exports-resolver',
  setupFilesAfterEnv: ['./scripts/testSetup.ts'],
  coverageReporters: ['lcov', 'text'],
  collectCoverageFrom: ['./src/**/*.js']
}
