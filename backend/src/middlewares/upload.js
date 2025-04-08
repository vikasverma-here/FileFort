// const multer = require('multer');
// const { storage } = require('../config/cloudinary');

// const upload = multer({ storage });

// module.exports = upload;
const multer = require('multer');
const { storage } = require('../config/cloudinary');

const upload = multer({ 
  storage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5 MB limit
});

module.exports = upload;
