const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, 'data', 'data.json'), (err, data) => {
  if (err) console.log(err)
  else {
    const list = JSON.parse(data.toString())
    const boyList = []
    const girlList = []

    // 遍历每个姓名对象
    list.forEach(obj => {
      if (obj.gender === '男') {
        boyList.push(obj)
      } else if (obj.gender === '女') {
        girlList.push(obj)
      }
    })

    // 插入到目标文件
    fs.writeFile(path.join(__dirname, 'data/男.json'), JSON.stringify(boyList), err => {
      if (err) console.log(err)
      else console.log('男性写入成功')
    })

    fs.writeFile(path.join(__dirname, 'data/女.json'), JSON.stringify(girlList), err => {
      if (err) console.log(err)
      else console.log('女性写入成功')
    })

  }
})