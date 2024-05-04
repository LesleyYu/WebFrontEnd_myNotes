const fs = require('fs')

fs.writeFile('./test.txt', 'hello, Node.js', (err) => {
  if (err) console.log(err);
  else console.log("写入成功")
})

fs.readFile('./test.txt', (err, data) => {
  if (err) console.log(err)
  else {
    console.log(data)   // <Buffer 68 65 6c 6c 6f 2c 20 4e 6f 64 65 2e 6a 73>
    console.log(data.toString())
  }
})