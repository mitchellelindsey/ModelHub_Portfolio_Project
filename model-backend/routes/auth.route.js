const express = require("express");
const router = express.Router();
const { createUser, userProfile } = require("../controller/auth.controller");
const { logUser } = require("../controller/auth.controller");

router.post("/create", createUser);
router.post("/getUser", logUser);
router.get("/userProfile", userProfile);

module.exports = router;