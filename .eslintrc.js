module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['react-app'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    indent: [
      'error',
      2, // Use 2 spaces for indentation
    ],
    quotes: ['warn', 'single'],
    semi: ['off'],
  },
};
