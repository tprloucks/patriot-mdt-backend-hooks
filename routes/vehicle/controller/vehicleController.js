const Vehicle = require("../model/Vehicle")

async function getAllVehicle(req, res){
    try {
        let foundAllVehicle = await Vehicle.find({}) 
        res.json({message:"success", payload:foundAllVehicle})
        
    } catch (e) {
        res.status(500).json({message:"failure", error:e.message})
    }
}

async function createVehicle(req, res){
    
    try {
        let createdVehicle = new Vehicle({
            make:req.body.make,
            model:req.body.model,
            plate:req.body.plate,
            color:req.body.color,
            year:req.body.year,
            insurance:req.body.insurance
            
        })
        let savedVehicle = await createdVehicle.save()
        res.json({payload:savedVehicle})
    }catch (e){
        res.status(500).json({message: "failure", error:e.message})
    }
}


module.exports={
    createVehicle,
    getAllVehicle

}
