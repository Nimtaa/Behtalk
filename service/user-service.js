var myUser  = require('../UserModel/user').User;


exports.addingUser = function (user1 , next){
  console.log('i am adding user');
  var newUser =  new myUser();
  newUser.email = user1.email.toLowerCase();
  newUser.password = user1.password;
  newUser.moonNumber = user1.moonNumber;
  newUser.firstName=user1.firstName;
  newUser.profilePhoto = 'd' ;
  newUser.message = '';
  console.log('created user');
  newUser.save(function(err){
   if(err){
     console.log(err);
   return next(err);
   }
 next(null);
 });
console.log('added successfully');
};
exports.findUser = function(email , next) {
  myUser.findOne({email:email.toLowerCase()} , function(err , user){
  next(err , user);
  });
};
exports.sendMessage = function(message , email , next){ // i dont know to add number or other things or not
  var instanceOfmessage = message;
  myUser.findOne({email:email.toLowerCase()} , function(err , user){
    if(user!=undefined)
    {user.message = user.message +  message;
    console.log('MESSAGE : '+ user.message);
    console.log(user.email);
  }else {
    return next(err);
  }

user.update({email : user.email} , {
  message : instanceOfmessage
  } , function(err, affected, resp) {
   console.log(resp);
});
    console.log('message Sent');
  });
};
