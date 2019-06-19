module.exports = {
  cacheDirectory: ".jest-cache",
  coverageDirectory: ".jest-coverage",
  coveragePathIgnorePatterns: ["<rootDir>/packages/components/(?:.+?)/lib/"],
  coverageReporters: ["html", "text"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  testPathIgnorePatterns: ["<rootDir>/packages/components/(?:.+?)/lib/"]
};
