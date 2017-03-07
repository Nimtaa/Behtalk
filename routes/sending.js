var express = require('express');
var router = express.Router();
var userService = require('../service/user-service');

router.get('/', function(req, res, next) {
    // if(!req.user){

    // }
  return    res.render('sending');
});
router.post('/' , function(req , res , next){

   userService.sendMessage(req.body.message ,req.body.email , function(err){
     if(err){
         console.log(err);
   }
   console.log(req.body.messsage);
   var vm = {
     message : req.body.message ,
     email : req.body.email
   };
   delete vm.message;
   delete vm.email;

});
});

module.exports = router;
