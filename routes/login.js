var express = require('express');
var router = express.Router();
var fs = require('fs');
const _ = require('lodash')
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('login');
  
  
});

router.post('/', function(req, res){
  var obj = fs.readFileSync('newUser.json',{encoding:'utf8', flag:'r'});
  var pData = JSON.parse(obj);
  console.log(pData.length);
  for(var i = 0; i < pData.length; i++){
    if((req.body.email == pData[i].email) && (req.body.password == pData[i].password)){
      console.log('login successful');
      res.redirect('/');
    }
  }
  
})


module.exports = router;