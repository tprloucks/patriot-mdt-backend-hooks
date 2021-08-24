const mongoose = require("mongoose")

const vehicleSchema = new mongoose.Schema({
    year:{
        type: String,
    },
    make:{
        type: String,
    },
    model:{
        type: String,
        
    },
    color:{
        type: String,
        
    },
    plate:{
        type: String,
        unique:true
    },
    insurance:{
        type:Boolean,
        default:true
    }

})

module.exports = mongoose.model("vehicle", vehicleSchema)