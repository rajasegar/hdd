const express = require('express');
const compression = require('compression');
const stream = require('express-stream');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 3000;
const app = express();

const practicesRouter = require('./routes/practices');
const valuesRouter = require('./routes/values');

app.set('view engine', 'pug');
app.use(compression());
app.use(express.static('public'));
app.use(cookieParser('html-driven-dev'));

// Disable cache control for now
/*
app.use(function cache(req, res, next) {
  res.setHeader('Cache-Control', 'public, max-age=5000');
  next();
});
*/

app.use(function contentType(req, res, next) {
  res.setHeader('Content-Type', 'text/html');
  next();
});

app.use(function (req, res, next) {
  if (req.cookies.darkMode) {
    res.locals.darkMode = req.cookies.darkMode;
  } else {
    res.cookie('darkMode', 1, { maxAge: 900000, httpOnly: true, overwrite: true });
  }
  next();
});

stream.closeBodyCloseHtml(true);
stream.streamBefore('_header');
stream.streamAfter('_footer');

app.get('/', stream.stream(), (req, res) => {
  console.log(req.cookies);
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

app.get('/light-mode', (req, res) => {
  console.log(req.cookies);
  res.cookie('darkMode', 0, { maxAge: 900000, httpOnly: true, overwrite: true });
  res.redirect('/');
});

app.get('/dark-mode', (req, res) => {
  console.log(req.cookies);
  res.cookie('darkMode', 1, { maxAge: 900000, httpOnly: true, overwrite: true });
  res.redirect('/');
});

app.get('/about', stream.stream(), (req, res) => {
  res.render('about');
});

app.listen(PORT);
console.log('Listening on port: ', PORT);
