module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  roots: ['<rootDir>/src'],
  testMatch: ['**/*.spec.(ts|tsx|js|jsx)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'jest-environment-puppeteer',
  globalSetup: './global-setup.js',
  globalTeardown: './global-teardown.js'
};
