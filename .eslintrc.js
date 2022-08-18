const path = require('path')

module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  plugins: ['prettier'],
  extends: ['plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  settings: {
    'import/resolver': {
      'eslint-import-resolver-lerna': {
        packages: [path.resolve(__dirname, 'packages'), path.resolve(__dirname, 'docs')],
      },
    },
  },
  rules: {},
}
