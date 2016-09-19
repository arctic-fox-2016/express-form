var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var say = req.param('Word')
  if(say){
    var word = say.toLowerCase()
    res.send('Ini tulisan '+ word)
  } else {
    res.render('index')
  }

});

module.exports = router;
