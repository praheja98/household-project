var mongoose=require('mongoose');
var householdSchema=mongoose.Schema({
    name:String,
    type:String,
    payment:{type:mongoose.Schema.Types.ObjectId,ref:'payment'}
});
var household=mongoose.model('household',householdSchema);
module.exports=household;