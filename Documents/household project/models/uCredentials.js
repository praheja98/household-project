var mongoose=require('mongoose');
var userSchema=mongoose.Schema({
    uname:String,
   pword:String,
   write:String

});
var Users=mongoose.model('Users',userSchema);
module.exports=Users;
