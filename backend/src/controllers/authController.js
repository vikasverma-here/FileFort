
const mongoose = require("mongoose")
// const validator=require("validator")
const { validationResult, cookie } = require("express-validator");
const bcrypt = require("bcrypt")
const User = require("../models/use.model")
const validator = require('validator');

const jwt = require("jsonwebtoken")

module.exports.signUp = async (req, res) => {

try{
    const { name, email, password,phone } = req.body;
  
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
  

    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      phone
    });
  
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"})

    res.cookie("Token", token, {
        httpOnly: true,      // JavaScript se access nahi hoga (secure rahega)
        secure: false,       // Localhost pe HTTPS nahi hota, isliye false rakha
        sameSite: "Strict",  // Sirf apni site ke request accept karega
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 din valid rahega
      });
      


    res.status(200).json({ success: true, message: "SignUp Successful", user });
}catch(error){
    console.error("signUp error :",error.message)
    res.status(500).json({ success: false, message: "Internal Server Error" });
}

  
  };
  

module.exports.login= async (req,res)=>{
  try{
    const {email,password} = req.body


    // pahle validate karo request ko step 1

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }


    // step 2 user find karo kya user exit karta hai is email se 

   const user =await User.findOne({email})

   if(!user){
    return res.status(400).json({success:false,message:"invalid credential"})
   }

console.log(password,user.password)
//    step 3 match karo password ko 

const isMatched = await bcrypt.compare(password,user.password)

if(!isMatched){
    return res.status(400).json({success:false,message:"invalid credential"})
}

// generate token step 4

const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"})

// last step set the token to cookie 
res.cookie("Token", token, {
    httpOnly: true,         // Only server can access
    secure: false,          // ❌ Local ke liye false (production me true)
    sameSite: "Lax",        // Local me Lax ya Strict (better Lax)
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  

    res.status(200).json({success:true,message:"Login Successfull"})
  } catch(error){
    console.error("login  error :",error.message)
    res.status(500).json({success:false,message:"Internal server error"})
  }
}

module.exports.logOut = async(req,res)=>{
  const token = req.cookies.Token
  
  if(!token){
   return res.status(404).json({success:false,message:"User not logged in. Please login first"})
  }

  res.clearCookie('Token')
  res.status(200).json({success:true,message:"logged out successfully"})

}