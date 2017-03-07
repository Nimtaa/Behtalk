var express = require('express');
var router = express.Router();
var userService = require('../service/user-service');

router.get('/', function(req, res, next) {

  return    res.render('login');
});
router.post('/' , function(req , res , next){

  userService.findUser(req.body.email , function(err , user){ //checking if there is user 
       if(user==undefined){
         res.redirect('/create');
         return next(err);

       }
       else  if( req.body.password!=user.password){
          return res.redirect('login');
       }
    else   return res.redirect('/sending');


});
});
module.exports = router;
