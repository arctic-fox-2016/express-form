var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //console.log(req.query)
  var string = "";

  string += `<h1>Say: ${req.query.say}</h1>`;
  string += `<h1>Param1: ${req.query.param1}</h1>`;
  string += `<h1>Param2: ${req.query.param2}</h1>`;

  res.send(string);
});

module.exports = router;
