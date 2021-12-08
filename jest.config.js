const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ['./jest.setup.js'],
    moduleNameMapper: {
      "^@components(.*)$": "<rootDir>/src/components$1",
      "^@data(.*)$": "<rootDir>/src/data$1",
      "^@styles(.*)$": "<rootDir>/src/styles$1",
      "^@typing(.*)$": "<rootDir>/src/typing$1",
      "^@utils(.*)$": "<rootDir>/src/utils$1",
      "^@pages(.*)$": "<rootDir>/pages$1",
      "^@hooks(.*)$": "<rootDir>/hooks$1",
    },
    collectCoverageFrom: ["src/**/*.tsx"]
}

module.exports = createJestConfig(customJestConfig)