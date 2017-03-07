var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userService = require('../service/user-service');


var userSchema = new Schema({
  firstName: {type: String, required: 'Please enter your first name'},
 moonNumber: {type: Number, required: 'Please enter your moon number'},
 email: {type: String, required: 'Please enter your email'},
 profilePhoto : String ,
 password : String ,
 message : String ,
 followers : [String] ,
 followings : [String]
}
);
userSchema.path('email').validate(function(value , next){
userService.findUser(value , function(err , user){
  if(err){
    console.log(err);
    return next(false);
  }
  next(!user);
});
},'That email is already used');
 var User = module.exports = mongoose.model("user", userSchema);

// var User = mongoose.model('User' , userSchema);
 module.exports = {
   User : User
};
