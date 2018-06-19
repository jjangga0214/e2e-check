module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  roots: ['<rootDir>/src'],
  testMatch: ['**/*.spec.(ts|tsx|js|jsx)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: './selenium.environment.js'
};
