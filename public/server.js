const http = require('http')
const port = 5000
const fs = require('fs')

var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  fs.readFile('homepage.html', function (error, data) {
    if (error) {
      res.writeHead(404)
      res.write('Error: File not Found')
    }
    else {
      res.write(data)
    }
    res.end()
  })
})

server.listen(port, function (error) {
  if (error) {
    consol.log('Something went wrong', error)
  } else {
    console.log('Server is listening on port' + port)
  }
})


