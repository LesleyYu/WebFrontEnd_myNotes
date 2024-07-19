const fs = require('fs')

fs.readFile('../素材/成绩.txt', 'utf8', function(err, dataStr) {
  if (err) {
    return console.log("read file failed! " + err.message)
  }

  const arrOld = dataStr.split(' ')

  const arrNew = []
  arrOld.forEach(item => {
    arrNew.push(item.replace('=', ': '))
  });

  const newStr = arrNew.join('\r\n');

  fs.writeFile('../素材/成绩-处理后.txt', newStr, function(err) {
    if (err) {
      console.log('write file failed! ' + err.message)
    }
    console.log('write file success!')
  })
})