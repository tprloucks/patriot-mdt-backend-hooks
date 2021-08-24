const Officer = require("../model/Officer")

async function getAllOfficer(req, res){
    try {
        let foundAllOfficer = await Officer.find({})
        res.json({message:"success", payload:foundAllOfficer})
    } catch (e) {
        res.status(500).json({message:"failure", error:e.message})
    }
}

async function createOfficer(req, res){
    
    try {
        let createdOfficer = new Officer({
            lastName:req.body.lastName,
            badge:req.body.badge,
            status:req.body.status,
            beat:req.body.beat,
            
            
        })
        let savedOfficer = await createdOfficer.save()
        res.json({payload:savedOfficer})
    }catch (e){
        res.status(500).json({message: "failure", error:e.message})
    }
}
async function deleteOfficerByID(req, res){
    const id = req.params.id;
    try{
        let deletedOfficer = await Officer.findByIdAndRemove({_id:id})
        res.json({message:"success", payload:deletedOfficer})
    }catch(e){
        res.status(500).json({message:"failure", error:e.message})
    }
}

module.exports={
    getAllOfficer,
    createOfficer,
    deleteOfficerByID
}