module.exports = {
  env: {
    es2021: true,
    node: true,
    'jest/globals': true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'jest',
  ],
  rules: {
  },
};
