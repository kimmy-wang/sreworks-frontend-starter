module.exports = {
  ignore: ['src/index.js'],
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: '3.22',
        modules: 'umd'
      },
    ],
    '@babel/preset-react'
  ],
}
