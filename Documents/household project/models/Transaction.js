var mongoose=require('mongoose');
var transactionSchema=mongoose.Schema({
    type: String,
    amount: Number,
    date: Date,
    uid: Number,
    paymentId: Number


});
var Transaction=mongoose.model('Transaction',transactionSchema);
module.exports=Transaction;
