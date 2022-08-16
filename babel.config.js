module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'entry',
          corejs: '3.22',
        },
      ],
    ],
    babelrcRoots: [
      '.',
      'packages/*', // 将子程序包都作为工作目录
    ],
  }
}
