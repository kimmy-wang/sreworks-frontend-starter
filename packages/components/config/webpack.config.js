const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const { getUmdEntries } = require('./utils')

module.exports = {
  entry: getUmdEntries(),
  mode: 'production',
  output: {
    filename: '[name].umd.js',
    path: path.resolve(process.cwd(), 'dist'),
    library: {
      name: '[name]',
      type: 'umd',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/preset-env', '@babel/preset-react'],
          // },
        },
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                strictMath: true,
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          {
            loader: 'postcss-loader',
          },
          // 将 Sass 编译成 CSS
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                charset: false,
              },
            },
          },
        ],
      },
      {
        test: /\.styl/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'stylus-loader',
          },
        ],
      },
      {
        test: /\.(jpg|png)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
}
