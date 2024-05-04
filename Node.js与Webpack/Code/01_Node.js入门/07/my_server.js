const fs = require('fs')
const path = require('path')

const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  if (req.url === '/index.html') {
    fs.readFile(path.join(__dirname, 'dist/index.html'), (err, data) => {
      res.setHeader('Content-Type', 'text/html;charset=utf-8')
      res.end(data.toString())
    })
  } else {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end('The resource you required does not exist.')
  }
})
server.listen(8080, () => {
  console.log(path.join(__dirname, 'dist/index.html'))
  console.log('Web service has started...')
})