var express = require('express');
var router = express.Router();
var userService = require('../service/user-service');


router.get('/' , function(req , res ,next){
  res.render('delete');
});

router.post('/' , function(req ,res , next){

  console.log(req.body);
   userService.deletingUser(req.body.email,function(err){
    if(err){
         return res.redirect('/create');
       }else{
         console.log('object deleted !');
         return res.redirect('/');
       }
 });
});

module.exports = router;
