const mongoose = require("mongoose")

const PedSchema = new mongoose.Schema({
    fullName: {
        type: String
    },

    address: {
        type: String,
    },
    warrants: {
        type: String,
    },
    wanted: {
        type: Boolean,
        default: false
    },
    license: {
        type: String,
    },
    DOB: {
        type: String,
    }

})

module.exports = mongoose.model("ped", PedSchema)