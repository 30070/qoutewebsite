const express=require('express');
const New_Quote=require('../models/New_Quote');
const router=express.Router();

router.get('/',async (req,res)=>{
    res.redirect('/quotes');
})

router.get('/quotes',async (req,res)=>{
    let newquotes=await New_Quote.find();
    res.render('Show/index',{newquotes})
})

router.get('/newform',async (req,res)=>{
    res.render('Show/newform');
})

router.get('/quotes/:id',async (req,res)=>{
    let foundquote=await New_Quote.findById(req.params.id);
    res.render('Show/show', {foundquote});
})

router.post('/quotes',async (req,res)=>{
    let {name,desc}=req.body;
    await New_Quote.create({name,desc});
    res.redirect('/quotes');
})


module.exports=router;