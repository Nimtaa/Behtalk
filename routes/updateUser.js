var express = require('express');
var router = express.Router();
var userService = require('../service/user-service');
/*GET home page*/



router.get('/' , function(req , res ,next){
  res.render('update');
});
router.post('/' , function(req ,res , next){

  console.log(req.body);
   userService.updateUser(req.body,function(err){
     if(err){
          return res.redirect('/create');
        }else{
          console.log('object updated !');
          return res.redirect('/');
        }

 });
});

module.exports = router;
