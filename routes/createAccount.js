var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('createAccount');
  
  
});

router.post('/', function(req, res){
  var obj = JSON.stringify(req.body);
  fs.appendFileSync('newUser.json',obj, {flag:'a'});
  res.redirect('/create');
  
})


module.exports = router;