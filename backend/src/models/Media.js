const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  
  originalname: {
    type: String,
    required: true
  },
 
  mimetype: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true }); // automatic createdAt aur updatedAt

const Media= mongoose.model('Media', mediaSchema);
module.exports = Media;


// {
//     fieldname: 'files',
//     originalname: 'Screenshot 2025-04-03 155602.png',
//     encoding: '7bit',
//     mimetype: 'image/png',
//     path: 'https://res.cloudinary.com/de2ak09qu/image/upload/v1744079864/imageFort/o1kbht0ajjiadjoewid9.png',
//     size: 175301,
//     filename: 'imageFort/o1kbht0ajjiadjoewid9'
//   }