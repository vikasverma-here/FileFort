const { body } = require("express-validator");



const validateUser = [
    body("name")
      .notEmpty().withMessage("Name is required")
      .isLength({ min: 3, max: 50 }).withMessage("Name must be 2 to 50 characters"),
  
    body("email")
      .notEmpty().withMessage("Email is required")
      .isEmail().withMessage("Invalid email address"),
  
    body("password")
      .notEmpty().withMessage("Password is required")
      .isLength({ min: 6,max:10 }).withMessage("Password must be at least 6-10 characters")
      .isStrongPassword().withMessage("Please set Strong password")
  ];


  const validateLogin = [
    
    body("email")
      .notEmpty().withMessage("Email is required")
      .isEmail().withMessage("Invalid email address"),
  
    body("password")
      .notEmpty().withMessage("Password is required")
      .isLength({ min: 6,max:10 }).withMessage("Password must be at least 6-10 characters")
      .isStrongPassword().withMessage("Please set Strong password")
  ];
  

  module.exports={validateUser,validateLogin}