var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('login');
  
  
});

router.post('/', function(req, res){
  var obj = fs.readFileSync('newUser.json');
  obj = obj.toString('utf8')

  console.log(obj)
  
})


module.exports = router;