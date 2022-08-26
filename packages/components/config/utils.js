const glob = require('glob')

function getEntries() {
  let map = {}
  const entryFiles = glob.sync('./src/**/index.js?(x)')
  entryFiles.forEach((filepath) => {
    let fileDir = /.\/src\/(.*?)\.jsx?/.exec(filepath)
    map[fileDir[1]] = filepath
  })
  return map
}

module.exports = {
  getEntries,
}
