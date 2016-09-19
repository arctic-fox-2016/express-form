var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var say = req.query.say
  var word = say.toLowerCase();
  res.send('respond with a resource'+ word);
});

module.exports = router;
