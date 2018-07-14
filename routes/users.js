var express = require('express');
var router = express.Router();
var userService = require('../service/user-service');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('login');
});


router.post('/' , function(req ,res , next){

  console.log(req.body);
   userService.findingAll(function(err,user){
    if(err){
         return res.redirect('/');
       }else{
         console.log(user);
         console.log('object Logged !');
         return res.redirect('/');
       }
 });
});

module.exports = router;
