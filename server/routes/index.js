var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Enter your email' });
});

router.post('/submit', function(req, res) {
  res.redirect('/success');
  res.end();
});

router.get('/success', function(req, res, next) {
  res.send("Success!");
});

module.exports = router;
