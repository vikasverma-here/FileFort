const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

     // 👉 Multer file size limit error
  if (err.code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({
      success: false,
      message: 'File too large. Max allowed size is 5MB.'
    });
  }


    res.status(500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  };
  
  module.exports = errorHandler;
  