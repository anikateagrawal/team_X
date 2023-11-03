const express=require('express');
const router=express.Router();
const bill=require('./models/bill');


router.get('/bills',async(req,res)=>{
    const bills=await bill.find();
    res.json(bills);
});



router.post('/bill',async(req,res)=>{
    try{
    console.log(req.body);
    await bill.create(req.body);
    res.send("success");
    }
    catch(e){
        console.log(e);
        res.redirect('/');
    }
})



module.exports= router;