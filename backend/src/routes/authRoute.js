const express = require("express")
const router = express.Router()
const authController =require("../controllers/authController")
const {validateUser} =require("../utills/validation")
const {validateLogin} =require("../utills/validation")



router.post("/signUp",validateUser,authController.signUp)
router.post("/login",validateLogin,authController.login)
router.post("/logout",validateLogin,authController.logOut)
  

module.exports= router