const { response } = require("express")
const express = require("express")

const router = express.Router()

let{
    createOfficer,
    getAllOfficer,
    deleteOfficerByID

}=require("./controller/officerController")

router.get("/get-all-officer", getAllOfficer)
router.post("/create-officer", createOfficer)
router.delete("/delete-by-id/:id", deleteOfficerByID)

module.exports=router