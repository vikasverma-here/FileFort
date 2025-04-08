const express = require("express")
const router = express.Router()
const userControllers = require("../controllers/userControllers")
const authenticateUser = require("../middlewares/authMiddleware")
router.get("/userMedia",authenticateUser,userControllers.getUserMedia)

module.exports = router;