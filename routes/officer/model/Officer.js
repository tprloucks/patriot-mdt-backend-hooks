const mongoose = require("mongoose")

const OfficerSchema = new mongoose.Schema({
    badge:{
        type:Number,
    },
    lastName:{
        type:String,
    },
    beat:{
        type:Number,
    },
    status:{
        type:String
    }
})

module.exports= mongoose.model("officer", OfficerSchema)