const express = require('express');
const compression = require('compression');

const app = express();
app.set('view engine', 'pug');
app.use(compression());
app.use(express.static('public'));

app.get('/api', (req,res) => {
  res.render('index');
});

module.exports = app;
