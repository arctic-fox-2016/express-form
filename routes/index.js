var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.post('/lili',(req, res) => {
  res.render('users', {nama: req.body})
  res.redirect('/')
})

module.exports = router;
