const  express = require("express")
const app = express()
const authRouter = require("./routes/authRoute")
const userRouter = require("./routes/userRoutes")
const cookieParser = require('cookie-parser');
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
module.exports = app