var http = require('http');
var express = require('express');
var app = express();

var server = http.createServer(app);

app.use(express.bodyParser());
app.post('/', function(req, res) {
  console.log(req.body);
  res.send(200);
});

server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
