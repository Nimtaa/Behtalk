var express = require('express');
var router = express.Router();
var userService = require('../service/user-service');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('sort');
});


router.post('/' , function(req ,res , next){


   userService.sort(function(err,user){
    if(err){
         return res.redirect('/');
       }else{
         console.log(JSON.parse(user));
         console.log('object Logged !');
         return res.redirect('/');
       }
 });
});

module.exports = router;
