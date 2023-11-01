const mongoose = require('mongoose');



const clientSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    address: {
        type: String,
    },
    contact:{
        type:String,
    }
});



const client = mongoose.model('Client', clientSchema);

module.exports = client;