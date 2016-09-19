var express = require('express');
var router = express.Router();


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('Your respond');
// });
// release 1
// router.get('/', function(req, res, next) {
//   res.send(req.query.say);
// });

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', text:" " });
});
router.post('/', function(req, res, next) {
  var string = req.body.teksname;
  string = string.toLowerCase();
  teksname_array =string.split(' ');
  if(teksname_array.length <= 1){
  teksname ="masukkan minimal dua kata"
  }
  res.render('index', { title: 'Express', text:string });
});
 // router.get('/', function(req, res, next) {
 //  res.send('req.query.param1&&req.query.param1');
 // });



module.exports = router;
