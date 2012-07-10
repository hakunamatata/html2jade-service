var express = require('express');
var server = express.createServer();
var html2jade;

//CORS middleware
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

try {
  html2jade = require('html2jade');
} catch (err) {
  console.log('Failure to load \'html2jade\' module');
  html2jade = require('./node_modules/html2jade/lib/html2jade')
}

server.use(express.bodyParser());
server.use(allowCrossDomain);

server.post('/convert', function(req, res) {
  var html = req.body.html;

  html2jade.convertHtml(html, {}, function(err, jade) {
    res.json({ jade: jade });
  });
});

server.listen(process.env.PORT || 9999);