const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))

app.get("/api/jsonp", (req, res) => {
  
})