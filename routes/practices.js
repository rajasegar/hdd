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
  const { videos, articles, demos } = data[id];
  res.render(`practices/${id}`, { videos, articles, demos });
});

module.exports = router;
