

module.exports.uploadMedia = (req, res, next) => {
    try {
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({
          success: false,
          message: "No files uploaded"
        });
      }
  
      const fileUrls = req.files.map(file => ({
        url: file.path,
        filename: file.filename
      }));
  
      res.status(200).json({
        success: true,
        message: "Files uploaded successfully",
        files: fileUrls
      });
    } catch (error) {
      console.error(error);
      next(error); // Global error handler ko bhej do
    }
  };
  