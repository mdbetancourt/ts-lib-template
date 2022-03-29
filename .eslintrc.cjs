/* eslint-disable @typescript-eslint/no-var-requires */
//@ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier' // must be last
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.cjs', '.mjs']
  },
  env: {
    node: true
  },
  ignorePatterns: ['*.js'],
  rules: {
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': ['error']
  }
});
