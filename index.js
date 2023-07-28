require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const path=require('path');
const quoteroutes=require('./routes/quoteroutes');
const seedDB = require('./seed');

const app=express();


mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log(`${process.env.DB_URL} is connected`);
})
.catch((err)=>{
    console.log(err)
})

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));

// seedDB();

app.use(quoteroutes);


const port=process.env.PORT||8000;
app.listen(port,()=>{
    console.log(`Server connected at ${port}`);
})
