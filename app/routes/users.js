var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var say = req.param('say')
  if(say){
    let a=say.toLowerCase()
  res.send(`Hi, User. You say ${a}`)
} else{
  res.render(`users`)
}
});

module.exports = router;
