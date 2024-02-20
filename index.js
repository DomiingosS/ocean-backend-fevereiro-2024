const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get ("/oi", function (req, res){
    res.send ("A aula foi muito bem explicada!")
})
app.listen(3000)
