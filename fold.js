const path = require('path')
const fs = require('fs')

const getFold = dir => {
  let json = {}
  const files = fs.readdirSync(dir)
  files.forEach(file => {
    let filePath = path.join(dir, file)
    if (fs.statSync(filePath).isDirectory()) {
      json[file] = {
        name: file,
        path: filePath,
        children: getFold(filePath)
      }
    } else {
      json[file] = {
        name: file,
        path: filePath
      }
    }
  })

  return json
}

const stream = fs.createWriteStream('public/tree.json')

stream.write(JSON.stringify(getFold('public/md')).replace(/\\\\/g, '/').replace(/"public/g, '"'))

stream.end()
