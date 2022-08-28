const glob = require('glob')

function getEntries() {
  let map = {}
  const entryFiles = glob.sync('./src/**/!(*.test|*.stories|*.spec|umd).js?(x)')
  entryFiles.forEach((filepath) => {
    let fileDir = /.\/src\/(.*?)\.jsx?/.exec(filepath)
    map[fileDir[1]] = filepath
  })
  return map
}

function getUmdEntries() {
  let map = {}
  const entryFiles = glob.sync('./src/**/umd.js?(x)')
  entryFiles.forEach((filepath) => {
    let fileDir = /\.\/src\/(\w+)\/.*\.jsx?/.exec(filepath)
    map[fileDir[1]] = filepath
  })
  return map
}

module.exports = {
  getEntries,
  getUmdEntries,
}
