const path = require('path')
const fs = require('fs')

const getFold = dir => {
  let jsonArr = []
  const files = fs.readdirSync(dir)
  files.forEach(file => {
    let filePath = path.join(dir, file)
    if (fs.statSync(filePath).isDirectory()) {
      jsonArr.push({
        label: file,
        path: filePath,
        children: getFold(filePath)
      })
    } else {
      jsonArr.push({
        label: file,
        path: filePath
      })
    }
  })

  return jsonArr
}

const stream = fs.createWriteStream('public/md/tree.json')

stream.write(JSON.stringify(getFold('public/md')).replace(/\\\\/g, '/').replace(/"public/g, '"'))

stream.end()
