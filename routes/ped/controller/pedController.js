const Ped = require("../model/Ped")

async function getAllPed(req, res) {
    try {
        let foundAllPed = await Ped.find({})
        res.json({
            message: "success",
            payload: foundAllPed
        })

    } catch (e) {
        res.status(500).json({
            message: "failure",
            error: e.message
        })
    }
}

async function createPed(req, res) {

    try {
        let createdPed = new Ped({
            fullName: req.body.fullName,
            address: req.body.address,
            warrants: req.body.warrants,
            wanted: req.body.wanted,
            license: req.body.license,
            DOB: req.body.DOB

        })
        let savedPed = await createdPed.save()
        res.json({
            payload: savedPed
        })
    } catch (e) {
        res.status(500).json({
            message: "failure",
            error: e.message
        })
    }
}

async function getPedByID(req, res) {
    const id = req.params.id
    try {
        let findPedByID = await
        Ped.findById({
            _id: id
        })
        res.json({
            message: "success",
            payload: findPedByID
        })
    } catch (e) {
        res.status(500).json({
            message: "failure",
            error: e.message
        })
    }
}

// async function getPedByFirstName(req, res){
//     const firstName = req.query.lastName
//     try {
//         let findPedByName = await
//         Ped.req.query.firstName
//         res.json({message:"Success", payload:findPedByName})
//     } catch (e) {
//         res.status(500).json({message:"failure",
//         error:e.message})
//     }
// }



module.exports = {
    getAllPed,
    createPed,
    getPedByID,
    // getPedByFirstName
}