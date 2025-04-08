const Media =  require("../models/Media")

module.exports.uploadMedia = async(req, res, next) => {
    try {
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({
          success: false,
          message: "No files uploaded"
        });
      }


    
  
    //   console.log(req.files)

      const fileUrls = req.files.map(file => ({
        url: file.path,
        filename: file.filename
      }));
  
    
      const fileDocs = req.files.map(file => ({
     
        originalname: file.originalname,
        
        mimetype: file.mimetype,
        path: file.path,
        size: file.size,
        uploadedBy: req.user._id
      }));
  
      await Media.insertMany(fileDocs);
  


      res.status(200).json({
        success: true,
        message: "Files uploaded successfully",
        files: fileUrls
      });
    } catch (error) {
      console.error(error);
      next(error); 
    }
  };
  