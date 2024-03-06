module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['react-app'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    indent: [
      'error',
      2, // Use 2 spaces for indentation
    ],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['off'],
  },
};
