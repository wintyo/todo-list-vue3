module.exports = {
  roots: ['<rootDir>'],
  testMatch: ['**/__tests__/**/*.(ts|tsx|js)'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'json', 'ts'],
  verbose: true,
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
    '@vue/vue3-jest': {
      compilerOptions: {
        propsDestructureTransform: true,
      },
    },
  },
};
