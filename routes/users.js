var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('Your respond');
// });

// router.get('/', function(req, res, next) {
//   res.send(req.query.say);
// });

router.get('/', function(req, res, next) {
  res.send('req.query.param1');
});


module.exports = router;
