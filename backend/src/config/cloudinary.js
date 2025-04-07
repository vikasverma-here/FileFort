const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    let folderName = 'othersFort'; // default folder

    if (file.mimetype.startsWith('image/')) {
      folderName = 'imageFort';
    } else if (file.mimetype.startsWith('video/')) {
      folderName = 'videoFort';
    } else if (file.mimetype === 'application/pdf') {
      folderName = 'pdfFort';
    }

    return {
      folder: folderName,
      resource_type: 'auto',
      allowed_formats: ['jpg', 'png', 'jpeg', 'pdf', 'mp4'],
    };
  }
});

module.exports = { cloudinary, storage };
