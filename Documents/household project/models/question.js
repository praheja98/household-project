var mongoose=require('mongoose');
var questionSchema=mongoose.Schema({
    qid:Number,
    modulecode:String,
    description:String,
    correctid:Number,
    choice:[{
      cid:Number,
        description:String
    }]


});
var question=mongoose.model('question',questionSchema);
module.exports=question;
