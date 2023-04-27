// jest.config.js
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  preset: './jest.preset.ts',
  transform: {
    '^.+\\.[tj]sx?$': [
      '@swc/jest',
      { jsc: { transform: { react: { runtime: 'automatic' } } } },
    ],
  },
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  modulePaths: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: [
    'libs/components/**/*.{ts,tsx}',
    '**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/*.stories.*',
    '!**/index.ts',
    '!jest.*.ts',
    '!.storybook/**/*',
    '!pages/_document.tsx',
  ],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/libs/components$1',
    '^@atoms(.*)$': '<rootDir>/libs/components/atoms$1',
    '^@molecules(.*)$': '<rootDir>/libs/components/molecules$1',
    '^@organisms(.*)$': '<rootDir>/libs/components/organisms$1',
    '^@hooks(.*)$': '<rootDir>/libs/hooks$1',
    '^@models(.*)$': '<rootDir>/libs/models$1',
    '^@provider(.*)$': '<rootDir>/libs/provider$1',
    '^@mocks(.*)$': '<rootDir>/libs/mocks$1',
    '^@utils(.*)$': '<rootDir>/libs/utils$1',
    '^@pages(.*)$': '<rootDir>/pages$1',
    '^@ui(.*)$': '<rootDir>/libs/ui$1',
    '^@api(.*)$': '<rootDir>/libs/api$1',
    '^@templates(.*)$': '<rootDir>/libs/templates$1',
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(customJestConfig);
