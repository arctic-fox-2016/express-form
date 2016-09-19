var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send(res);
    res.render("users");

});

router.post('/add', function(req, res, next) {

  res.render('users',{firstname: req.body.firstname.toLowerCase(), lastname: req.body.lastname.toLowerCase()})

});



module.exports = router;
