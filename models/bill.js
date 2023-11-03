const mongoose=require("mongoose");

const schema=new mongoose.Schema({
    client:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Client'
    },
    productName: String,
    price: Number,
    cgstRate: Number,
    sgstRate: Number,
    quantity: Number,
    total:Number
})

const model=mongoose.model('Bill',schema);

module.exports=model;