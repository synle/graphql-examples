var express = require('express')
var data = require('./data')
var schema = require('./schema')
var app = express()

app.get('/', function (req, res) {
  res.json(data);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
