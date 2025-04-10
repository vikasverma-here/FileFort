const Media = require("../models/Media");

module.exports.getUserMedia = async (req, res) => {
  try {
 
    if (!req.user || !req.user._id) { 
      return res.status(400).json({
        success: false,
        message: "User does not exist" 
      });
    }

    const data = await Media.find({ uploadedBy: req.user._id }).populate('uploadedBy','name email createdAt');

    
    if (data.length === 0) {
      return res.status(404).json({ 
        success: false,            
        message: "No media uploaded by you"
      });
    }

    res.status(200).json({
      success: true,
      message: "Media fetched successfully",
      data
    });
    
  } catch (error) {
    console.error("During fetching media error:", error);
    
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};


module.exports.getProfile=async(req,res)=>{
  res.json({
    message: "Profile data fetched successfully",
    user: req.user
  })
}