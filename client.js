const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const client=require('./models/client');


router.get('/client',async(req,res)=>{
    const clients=await client.find();
    res.json(clients);
});

router.get('/add/client',(req,res)=>{
    res.render('client');
})

router.post('/client',async(req,res)=>{
    const {name,address,contact,email}=req.body;
    await client.create({name,address,contact,email});
    res.redirect("/client");
})



module.exports= router;