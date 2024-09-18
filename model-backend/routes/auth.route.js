const express = require("express")
const router = express.Router()
const {createUser, userProfile} = require("../controller/auth.controller")
const {getUser} = require("../controller/auth.controller")
const {userProfile} = require("../controller/auth.controller")

router.post("/create", createUser)
router.get("/getUser", getUser)
router.get("/userProfile", userProfile)

module.exports = router
