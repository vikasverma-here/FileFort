const express = require("express")
const router = express.Router()
const userControllers = require("../controllers/userControllers")
const authenticateUser = require("../middlewares/authMiddleware")
router.get("/userMedia",authenticateUser,userControllers.getUserMedia)
router.get("/profile",authenticateUser,userControllers.getProfile)
module.exports = router;