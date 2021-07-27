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

// // 读取/public/md文件夹，获取文件结构，返回json
// function getFold(dir) {
//   let files = fs.readdirSync(dir)
//   files.forEach((file) => {
//     let filePath = path.join(dir, file)
//     if (fs.statSync(filePath).isDirectory()) {
//       let fold = getFold(filePath)
//       fold.name = file
//       json[file] = fold
//     } else {
//       json[file] = file
//     }
//   })
//   return json
// }

const stream = fs.createWriteStream('public/tree.json')

stream.write(JSON.stringify(getFold('public/md')))

stream.end()
