const express = require('express');
const compression = require('compression');

const PORT = process.env.port || 3000;

const app = express();
app.set('view engine', 'pug');
app.use(compression());
app.use(express.static('public'));

app.get('/', (req,res) => {
  res.render('index');
});

app.listen(PORT);
console.log('Listening on port: ', PORT);
