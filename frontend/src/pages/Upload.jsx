import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function Upload() {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate()
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    if (selectedFiles.length > 5) {
      toast("Only 5 files allowed at a time!")
      return;
    }

    setFiles(selectedFiles);
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      toast("Please select files first.")
      return;
    }

    const formData = new FormData();
    files.forEach((file) => {
      formData.append('files', file);
    });

    try {
      setUploading(true);
      const res = await axios.post('http://localhost:4000/api/uploads/media', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true,
      });
      console.log(res.data);
      toast(res.data.message)
      setFiles([]);
      navigate("/files")

    } catch (error) {
      toast(error.response.data.message)
      // toast("file must be less then 5mb")
    } finally {
      setUploading(false);
    }
  };

  return (
    <motion.div 
      className="max-w-md mx-auto mt-10 p-6 rounded-2xl shadow-2xl bg-white"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Upload Files</h2>

      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="flex flex-col items-center justify-center border-2 border-dashed border-blue-400 rounded-xl p-8 cursor-pointer mb-4"
      >
        <input 
          type="file" 
          multiple 
          onChange={handleFileChange} 
          accept="image/*,video/*,application/pdf"
          className="hidden"
          id="fileUpload"
        />
        <label htmlFor="fileUpload" className="text-blue-500 cursor-pointer">
          Click to select files
        </label>
      </motion.div>

      {files.length > 0 && (
        <ul className="mb-4">
          {files.map((file, idx) => (
            <motion.li 
              key={idx} 
              className="text-gray-700 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {file.name}
            </motion.li>
          ))}
        </ul>
      )}

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleUpload}
        disabled={uploading}
        className="w-full bg-blue-500 text-white py-2 rounded-xl font-semibold hover:bg-blue-600 transition"
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </motion.button>
    </motion.div>
  );
}

export default Upload;
