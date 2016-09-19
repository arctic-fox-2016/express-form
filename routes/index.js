var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    text: '-'
  });
});


router.post('/', function(req, res){
  var string = req.body.test_string.toLowerCase().trim();
  var string_array = string.split(" ");
  if(string_array.length <= 1){
    string = "Please input string more than one word"
  }
  res.render('index', {
    title: 'Express',
    text: string
  })
});

module.exports = router;
