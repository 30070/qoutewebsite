const mongoose=require('mongoose');

const QuoteSch= new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        require:true
    },
    desc:{
        type:String,
        trim:true,
        require:true
    }
});
const New_Quote = mongoose.model('New_Quote', QuoteSch);
module.exports=New_Quote;