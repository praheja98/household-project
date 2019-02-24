var mongoose=require('mongoose');
var memberSchema=mongoose.Schema({
    username:String,
    password:String,
    email:String,
    amount:Number,
    type:String,
    payment:[{
        paymentId:String,
        amountDue:Number,
    }],

    household:[{name:String}]

});
var member=mongoose.model('member',memberSchema);
module.exports=member;