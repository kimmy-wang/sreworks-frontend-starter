const base = require('../../jest.config.base.js')
const pkg = require('./package.json')

module.exports = {
  ...base,
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.(less|css)$': 'jest-less-loader',
  },
  testEnvironment: 'jsdom',
  displayName: pkg.name,
}
