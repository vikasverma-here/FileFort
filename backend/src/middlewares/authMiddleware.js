const jwt = require("jsonwebtoken")
const User = require("../models/use.model")

const authenticateUser = async(req,res,next)=>{
  try{
    
    const token = req.cookies.Token;
  //  console.log(token)
    if(!token){
        return res.status(400).json({success:false,message:"Unauthrized : token not provided"})
    }

    const decoded = jwt.verify(token,process.env.JWT_SECRET)
  //  console.log(decoded)
   const user = await User.findById(decoded.id)

   if (!user) {
    return res.status(401).json({ success: false, message: "Unauthorized: User not found" });
  }
   
  req.user = user
next()

  }catch(error){
    console.error("error during  userthentication ",error)
    res.status(500).json({success:false,message:"Internal server error"})
  }
}

module.exports = authenticateUser;



