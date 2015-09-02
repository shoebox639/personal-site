var express = require('express');
var compression = require('compression')

var app = express();

app.use(compression());

app.use('/assets/build', express.static(__dirname + '/build'));
app.use('/assets', express.static(__dirname + '/src'));
app.use('/vendor', express.static(__dirname + '/bower_components'));

var validPaths = ['about', 'resume', 'contact'];

app.get('/:path?', function(req, res, next) {
  var path = req.params.path;
  if (!path || validPaths.indexOf(path) > -1) {
    res.sendFile(__dirname + '/src/html/index.html');
  }
  else {
    next();
  }
});

app.use(function(req, res, next) {
  res.status(404);
  res.send('Page not found');
});

var port = Number(process.env.PORT || 8060);
app.listen(port);
console.log("docs server running on http://localhost:" + port);
