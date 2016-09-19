var express = require('express');
var models = require('./../models')
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Tokotap Homepage'
  });
});

/* GET users page. */
router.get('/users', function (req, res, next) {
  models.findAll(function (data) {
    res.render('users', {
      title: 'Users Homepage',
      say: req.query.say,
      what: req.query.what,
    });
  })
});

router.post('/users', function (req, res, next) {
  res.render('users', {
    title: 'Users Homepage',
    text: req.body.text.toLowerCase()
  });
});

module.exports = router;
