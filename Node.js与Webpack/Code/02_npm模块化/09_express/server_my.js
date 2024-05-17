

const express = require('express')
const server = express()

server.get('/', (req, res) => {
  res.send('Hello, welcome to Express')
})

server.all('*', (req, res) => {
  res.status(404)
  res.send('Not Found')
})

server.listen(3000, () => {
  console.log('Web server launched')
})