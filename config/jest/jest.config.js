module.exports = {
  rootDir: '../../',
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/*.ts',
    '!**/node_modules/**',
    '!**/build/**'
  ],
  moduleDirectories: ['.', 'src', 'node_modules'],
  coverageDirectory: '<rootDir>/config/jest/coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/build/',
    '<rootDir>/node_modules/'
  ],
  transform: {
    "^.+\\.ts?$": "ts-jest"
  }
};
