const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: 2,
      maxlength: 50,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Invalid email address"],
    },
    password: {
      type: String,
      minlength: [6, "Password must be at least 6 characters"],
     validate:[validator.isStrongPassword,"Please enter Strong Password"]
      
    },
    firebaseUid: {
      type: String,
      // unique: true,
    },
    phone: {
      type: String,
      validate: [validator.isMobilePhone, "Invalid phone number"],
    },
    profilePic: {
      type: String,
      validate: [validator.isURL, "Invalid profile picture URL"],
    }
  },
  { timestamps: true }
);
const User = mongoose.model("User",userSchema)
module.exports = User;

