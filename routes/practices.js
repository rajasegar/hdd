const express = require('express');
const router = express.Router();
const stream = require('express-stream');

const data = require('../data/practices');

router.get('/', stream.stream(), (req, res) => {
  res.render('practices');
});

router.get('/:id', stream.stream(), (req, res) => {
  const { id } = req.params;
  console.log(id);
  const { values, videos, articles, demos, websites } = data[id];
  res.render(`practices/${id}`, { videos, articles, demos, values, websites });
});

module.exports = router;
