var express = require('express');
var router = express.Router();
var userService = require('../service/user-service');
/*GET home page*/

router.get('/',function(req, res, next) {
res.send('Hi Welcome!');

});

router.get('/create' , function(req , res ,next){
  res.render('index');
});
router.post('/create' , function(req ,res , next){

  console.log(req.body);
   userService.addingUser(req.body,function(err){
    if(err){
      var vm = {
        title : 'create an account' ,
    input : req.body ,
        error : err
      };
         delete vm.input.password ;

         return res.redirect('/create');
       }


      res.redirect('/sending');



 });
});

module.exports = router;
