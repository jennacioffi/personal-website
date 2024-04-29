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
      'warn',
      2, // Use 2 spaces for indentation
    ],
    quotes: ['warn', 'single'],
    semi: ['off'],
  },
};
