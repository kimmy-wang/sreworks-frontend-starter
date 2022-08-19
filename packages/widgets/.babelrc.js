module.exports = {
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
