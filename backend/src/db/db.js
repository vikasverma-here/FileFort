const mongoose = require("mongoose")

const connectDb= async()=>{
    await mongoose.connect(process.env.DB_URI)
    .then(()=>{
        console.log("db connected successfully")
    })
    .catch((error)=>{
        console.error("error accured  while db connection",error)
    })
}


module.exports = connectDb