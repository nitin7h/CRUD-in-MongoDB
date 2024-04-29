const express = require("express")
const router = express.Router()
const { home, addUser, getuserAll, getOne, update, deleteUser } = require("../controllers/controller")

router.get("/home", home)
router.post("/addUser", addUser)
router.get("/getuserAll", getuserAll)
router.get("/getone/:id", getOne)
router.put("/update/:id", update)
router.delete("/delete/:id", deleteUser)


module.exports = router