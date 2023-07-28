const mongoose=require('mongoose');


// const QuoteSchema= new mongoose.Schema({
//     name:{
//         type:String,
//         trim:true,
//         require:true
//     },
//     desc:{
//         type:String,
//         trim:true,
//         require:true
//     }
// });
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
const Quote = mongoose.model('Quote', QuoteSch);
module.exports=Quote;