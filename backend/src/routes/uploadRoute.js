const express  =require("express")
const Router = express.Router()
const uploadController = require("../controllers/uploadController")
const upload = require("../middlewares/upload");
Router.post("/media",upload.array('files', 5),uploadController.uploadMedia)

module.exports = Router