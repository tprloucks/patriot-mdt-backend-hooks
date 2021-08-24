const { response } = require("express")
const express = require("express")
const Vehicle = require("./model/Vehicle")
const router = express.Router()

let{
    createVehicle,
    getAllVehicle
}= require("./controller/vehicleController")

router.post("/create-vehicle", createVehicle)
router.get("/get-all-vehicle", getAllVehicle)
router.get("/get-by-plate", (req, res)=>{
    Vehicle.find(req.query)
        .then(
            result=>{
                res.json(result)
                
            }
        ).catch(
            error =>{
                console.log(error)
            }
        )
    console.log(req.query)
    
    
})
// router.get("/get-by-name", getPedByFirstName)



module.exports= router