const path = require('path')
const glob = require('glob')

function getEntries() {
  let map = {}
  const entryFiles = glob.sync('./src/**/*.js')
  entryFiles.forEach((filepath) => {
    let fileDir = /.\/src\/(.*?)\.js/.exec(filepath)
    map[fileDir[1]] = filepath
  })
  return map
}

module.exports = {
  entry: getEntries(),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'es'),
    library: {
      type: 'module',
    },
  },
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
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
    ],
  },
}
