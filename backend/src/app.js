const  express = require("express")
const app = express()
const authRouter = require("./routes/authRoute")
const userRouter = require("./routes/userRoutes")
const cookieParser = require('cookie-parser');
const errorHandler = require('./middlewares/errorHandler');
const uploadRouter = require("./routes/uploadRoute")
const cors = require("cors")
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.use("/api/uploads",uploadRouter)


 
  


app.use(errorHandler);
module.exports = app