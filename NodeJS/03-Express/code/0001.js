const express = require("express")
const app = express()

app.get("/user", (req, res) => {
  res.send({ name: 'zs', age: 20, gender: 'm'})
})

app.post('/user', (req, res) => {
  res.send('request successful')
})

app.get('/', (req, res) => {
  console.log(req.query)
  res.send(req.query)
})

app.get('/user/:ids/:username', (req, res) => {
  console.log(req.params)
  res.send(req.params)
})

app.listen(80, () => {
  console.log('express server running at http://127.0.01')
})