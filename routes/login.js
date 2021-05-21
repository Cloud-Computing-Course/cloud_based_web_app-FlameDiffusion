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
  console.log(pData[2])
  for(var i = 0; i < pData.lenght; i++){
    if((req.body.email == pData[i].email) && (req.body.password == pData[i].password)){
      console.log(key);
      console.log(_.isEqual(req.body.email,key));
      res.redirect('/');
    }
  }
  
})


module.exports = router;