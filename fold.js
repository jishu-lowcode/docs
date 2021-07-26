import path from 'path'
import fs from 'fs'

let json = {}

// 读取/public/md文件夹，获取文件结构，返回json
function getFold(dir) {
  let files = fs.readdirSync(dir)
  files.forEach(file => {
    let filePath = path.join(dir, file)
    if (fs.statSync(filePath).isDirectory()) {
      let fold = getFold(filePath)
      fold.name = file
      json[file] = fold
    } else {
      json[file] = file
    }
  })
  return json
}

console.dir(JSON.stringify(getFold('public/md')))