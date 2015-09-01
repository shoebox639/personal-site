var express = require('express');
var compression = require('compression')

var app = express();

app.use(compression());

app.use('/assets/build', express.static(__dirname + '/build'));
app.use('/assets', express.static(__dirname + '/src'));
app.use('/vendor', express.static(__dirname + '/bower_components'));

app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/src/html/index.html');
});

var port = Number(process.env.PORT || 8060);
app.listen(port);
console.log("docs server running on http://localhost:" + port);
