var mongoose=require('mongoose');
var paymentSchema=mongoose.Schema({
    paymentId: String ,
    paymentType: String,
    amountDue: Number,
    paymentDate:Date,
    lender:String,
    household:String
});
var payment=mongoose.model('payment',paymentSchema);
module.exports=payment;
