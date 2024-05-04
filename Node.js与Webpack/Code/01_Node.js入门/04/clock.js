// import
const fs = require('fs')
const path = require('path')

// 1. 创建两个正则表达式，分别用来匹配 <style>和 <script> 标签
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 2. 使用 fs 模块，读取需要被处理的 HTML 文件
fs.readFile(path.join(__dirname, './dist/index.html'), 'utf8', (err, dataStr) => {
  if (err) return console.log('failed in reading html file' + err.message)
  
  // 3. 自定义 resolveCSS 方法，来写入 index.css 样式文件
  resolveCSS(dataStr)
  // 4. 自定义 resolveJs 方法，来写入 index.js 脚本文件
  resolveJS(dataStr)
  // 5. 自定义 resoleHTML方法，来写入index.html 文件
  resolveHTML(dataStr)
})

function resolveCSS(htmlStr) {
  // 使用正则提取页面中 <style></style> 标签
  const r1 = regStyle.exec(htmlStr)

  const newCSS = r1[0].replace('<style>', '').replace('</style>', '')

  fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, err => {
    if (err) return console.log('write css file failed!', err.message)
    console.log('write css file successful!')
  })
}

function resolveJS(htmlStr) {
  const r2 = regScript.exec(htmlStr)

  const newJS = r2[0].replace('<script>', '').replace('</script>', '')

  fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, err => {
    if (err) return console.log('write js file failed!', err.message)
    console.log('Write JS file successful!')
  })
}

// 使用字符串的replace 方法， 把内嵌的 <style> 和 <script> 标签，替换为外联的 <link> 和 <script> 标签
function resolveHTML(htmlStr) {
  const newHTML = htmlStr
    .replace(regStyle, '<link rel="stylesheet" href="./index.css" />')
    .replace(regScript, '<script src="./index.js"></script>')

  fs.writeFile(path.join(__dirname, "/clock/index.html"), newHTML, err => {
    if (err) return console.log("Write HTML file failed!" + err.message)
    console.log('Write HTML file successful!')
  })
}