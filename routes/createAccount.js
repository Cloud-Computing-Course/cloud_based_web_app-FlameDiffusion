var express = require('express');
var router = express.Router();
var fs = require('fs');
var {check, validationResult} = require('express-validator');
var data = require('../newUser.json'); 
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('createAccount');
  
  
});

router.post('/', 
  [
    check('password')
    .isLength({min: 8})
  ],
  async(req, res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      console.log(errors);
      const alert = errors.array();
      res.render('createAccount', alert)
    }else{
      var obj = req.body;
      console.log(obj)
      data.push(obj);
      var updatedData = JSON.stringify(data);
     
      fs.writeFileSync('newUser.json',updatedData);
      res.redirect('/create');
    }
    
  
})


module.exports = router;