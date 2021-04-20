const express = require('express');
const compression = require('compression');
const stream = require('express-stream');

const PORT = process.env.PORT || 3000;
const app = express();
app.set('view engine', 'pug');
app.use(compression());
app.use(express.static('public'));

app.use(function cache(req, res, next) {
  res.setHeader('Cache-Control', 'public, max-age=5000');
  next();
});

app.use(function contentType(req, res, next) {
  res.setHeader('Content-Type', 'text/html');
  next();
});

stream.closeBodyCloseHtml(true);
stream.streamBefore('_header');
stream.streamAfter('_footer');

app.get('/', stream.stream(), (req, res) => {
  res.render('index');
});

app.get('/values', stream.stream(), (req, res) => {
  res.render('values');
});

app.get('/principles', stream.stream(), (req, res) => {
  res.render('principles');
});

app.get('/practices', stream.stream(), (req, res) => {
  res.render('practices');
});

app.get('/practices/progressive-html', stream.stream(), (req, res) => {
  const practices = require('./data/practices.json');
  console.log(practices);
  const { videos, articles, demos } = practices['progressive-html'];
  res.render('practices/progressive-html', { videos, articles, demos });
});

app.get('/practices/just-enough-javascript', stream.stream(), (req, res) => {
  const {
    videos,
    articles,
    demos,
  } = require('./data/practices/just-enough-javascript.js');
  res.render('practices/just-enough-javascript', { videos, articles, demos });
});

app.get('/practices/html-over-the-wire', stream.stream(), (req, res) => {
  const {
    videos,
    articles,
    demos,
  } = require('./data/practices/html-over-the-wire.js');
  res.render('practices/html-over-the-wire', { videos, articles, demos });
});

app.get('/credits', stream.stream(), (req, res) => {
  res.render('credits');
});

app.get('/tools', stream.stream(), (req, res) => {
  res.render('tools');
});

app.listen(PORT);
console.log('Listening on port: ', PORT);
