const express  =require("express")
const Router = express.Router()
const uploadController = require("../controllers/uploadController")
const upload = require("../middlewares/upload");
const authMiddleware = require("../middlewares/authMiddleware")

Router.post("/media",authMiddleware
    ,upload.array('files', 5),uploadController.uploadMedia)

module.exports = Router