var express = require('express');
var compression = require('compression')

var app = express();

app.use(compression());

app.use('/assets/node_modules', express.static(__dirname + '/node_modules'));
app.use('/assets/bower_components', express.static(__dirname + '/bower_components'));
app.use('/assets', express.static(__dirname + '/build'));

var validPaths = ['about', 'resume', 'contact'];

app.get('/:path?', function(req, res, next) {
  var path = req.params.path;
  if (!path || validPaths.indexOf(path) > -1) {
    res.sendFile(__dirname + '/build/app/html/index.html');
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
