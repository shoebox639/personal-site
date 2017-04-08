const express = require('express');
const compression = require('compression');

const app = express();

app.use(compression());

app.use('/assets/node_modules', express.static(`${__dirname}/node_modules`));
app.use('/assets/bower_components', express.static(`${__dirname}/bower_components`));
app.use('/assets', express.static(`${__dirname}/build`));

const validPaths = ['about', 'resume', 'contact'];

app.get('/:path?', (req, res, next) => {
  const path = req.params.path;
  if (!path || validPaths.indexOf(path) > -1) {
    res.sendFile(`${__dirname}/build/app/html/index.html`);
  }
  else {
    next();
  }
});

app.post('')

app.use((req, res, next) => {
  res.status(404);
  res.send('Page not found');
});

const port = Number(process.env.PORT || 8060);
app.listen(port);
console.log("docs server running on http://localhost:" + port);
