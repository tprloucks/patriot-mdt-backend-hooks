const {
    response
} = require("express")
const express = require("express")
const Ped = require("./model/Ped")
const router = express.Router()


let {
    createPed,
    getAllPed,
    getPedByID,

} = require("./controller/PedController")

router.get("/get-all-ped", getAllPed)
router.post("/create-ped", createPed)
router.get("/get-by-id/:id", getPedByID)
router.get("/get-by-name", (req, res) => {
    Ped.find(req.query)
        .then(
            result => {
                res.json(result)

            }
        ).catch(
            error => {
                console.log(error)
            }
        )
    console.log(req.query)


})
// router.get("/get-by-name", getPedByFirstName)



module.exports = router