const express = require('express');
const compression = require('compression');
const stream = require('express-stream');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const app = express();

const practicesRouter = require('./routes/practices');
const valuesRouter = require('./routes/values');
const hotwireRouter = require('./routes/html-over-the-wire');

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(express.static('public'));

app.use(function contentType(req, res, next) {
  res.setHeader('Content-Type', 'text/html');
  next();
});

// Set active url
app.use(function (req, res, next) {
  res.locals.active = req.url;
  next();
});

stream.closeBodyCloseHtml(true);
stream.streamBefore('_header');
stream.streamAfter('_footer');

app.get('/', stream.stream(), (req, res) => {
  res.render('index');
});

app.get('/principles', stream.stream(), (req, res) => {
  res.render('principles');
});

app.get('/credits', stream.stream(), (req, res) => {
  res.render('credits');
});

app.get('/tools', stream.stream(), (req, res) => {
  res.render('tools');
});

app.use('/practices', practicesRouter);
app.use('/values', valuesRouter);
app.use('/html-over-the-wire', hotwireRouter);

app.get('/about', stream.stream(), (req, res) => {
  res.render('about');
});

app.listen(PORT);
console.log('Listening on port: ', PORT);
