const fs = require('fs')

const whiteList = [
  '.eslintrc.json',
  '.git',
  '.cache',
  '.gitignore',
  '.vscode',
  '.postcssrc',
  '.browserlistrc',
  'README.md',
  'src',
  'package.json',
  'package-lock.json',
  'node_modules',
  'dist'
]

try {
  if (fs.statSync('./').isDirectory()) {
    const files = fs.readdirSync('./')
    files.forEach(file => {


      if (whiteList.includes(file)) {
        return
      }

      fs.unlinkSync(`./${file}`)
    })
  }
}
catch (err) {
  // eslint-disable-next-line
   console.log(err)
}