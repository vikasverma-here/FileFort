require("dotenv").config()

const app =  require("./src/app")
const connectDb=require("./src/db/db")
const PORT =  process.env.PORT || 3000
connectDb()
app.listen(PORT,()=>{
    console.log("server is listening on port ",PORT)
})