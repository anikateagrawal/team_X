const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const client=require('./models/client');


router.get('/client',async(req,res)=>{
    const clients=await client.find();
    res.json(clients);
});



router.post('/client',async(req,res)=>{
    try{
    console.log(req.body);
    const {name,address,contact,email}=req.body;
    await client.create({name,address,contact,email});
    res.send("success");
    }
    catch(e){
        console.log(e);
        res.redirect('/');
    }
})



module.exports= router;