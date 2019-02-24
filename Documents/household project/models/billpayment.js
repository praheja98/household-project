var mongoose=require('mongoose');
var transactionSchema=mongoose.Schema({
    amount: Number,
    date: Date,
    memberId: Number,
    paymentId: Number


});
var question=mongoose.model('transaction',transactionSchema);
module.exports=question;
