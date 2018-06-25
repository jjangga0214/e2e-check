module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  roots: ['<rootDir>/src'],
  testMatch: ['**/*.spec.(ts|tsx|js|jsx)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'jest-environment-puppeteer',
  globalSetup: 'jest-environment-puppeteer/setup',
  globalTeardown: 'jest-environment-puppeteer/teardown'
};
