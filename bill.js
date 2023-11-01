const mongoose = require('mongoose');



const billSchema = new mongoose.Schema({
    p_name:{
        type:String,
        trim:true,
        required:true
    },
    p_price: {
        type: Number,
        required: true
    },
    taxrate: {
        type: Number,
        required:true0
    },
    total:{
        type:number,
        required:true
    }
});



const client = mongoose.model('Client', clientSchema);

module.exports = client;