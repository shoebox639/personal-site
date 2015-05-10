var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/src/html'));
app.use('/vendor', express.static(__dirname + '/bower_components'))

var port = Number(process.env.PORT || 8060);
app.listen(port);
console.log("docs server running on http://localhost:" + port);
