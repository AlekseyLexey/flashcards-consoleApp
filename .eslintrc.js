module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 0,
    'comma-dangle': 0,
    'class-methods-use-this': 0,
    'no-use-before-define': 0,
    'linebreak-style': ['error', 'windows'],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-restricted-syntax': [
      'error',
      'FunctionExpression',
      'WithStatement',
      'BinaryExpression[operator=' in ']',
    ],
  },
};
