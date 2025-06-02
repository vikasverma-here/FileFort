import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion"
function Files() {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFiles = async () => {
    try {
      const res = await axios.get('http://localhost:4000/api/user/userMedia', { withCredentials: true });
      setMedia(res.data.data);
    } catch (error) {
      console.error(error);
     toast(error.response.data.message)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
      {media.length === 0 ? (
        <div className="col-span-full text-center text-gray-600">
          No files uploaded yet.
        </div>
      ) : (
        media.map((file) => (
          <div key={file._id} className="rounded-lg shadow-md bg-white flex flex-col">
            
            {/* Clickable Media */}
            <a href={file.path} target="_blank" rel="noopener noreferrer">
              {file.mimetype.startsWith('image') ? (
                <img src={file.path} alt={file.originalname} className="w-full h-60 object-cover" />
              ) : file.mimetype.startsWith('video') ? (
                <video src={file.path} className="w-full h-60 object-cover" />
              ) : (
                <div className="flex flex-col items-center justify-center h-60 p-4 bg-gray-100">
                  <span className="text-gray-700 mb-2">PDF Document</span>
                  <p className="text-blue-500 underline">View PDF</p>
                </div>
              )}
            </a>

            {/* File Details */}
            <div className="p-4 bg-gray-50 border-t">
              <h3 className="text-base font-semibold truncate">{file.originalname}</h3>
              <p className="text-sm text-gray-500">{file.mimetype}</p>
              
              {/* Created At Date */}
              <p className="text-xs text-gray-400 mt-1">
                Uploaded on: {formatDate(file.createdAt)}
              </p>
<div className="flex items-center gap-2 ml-auto mt-2">
  {/* Download Button */}

<button
  className="bg-blue-600 text-white py-1 px-2 rounded-lg hover:bg-blue-700 transition duration-300"
  onClick={async () => {
    try {
      const response = await fetch(file.path, { mode: 'cors' });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = file.originalname;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed", error);
      toast.error("Download failed");
    }
  }}
>
  <i className="ri-file-download-fill"></i>
</button>

  {/* Share Button */}
  <button
    className="bg-green-600 text-white py-1 px-2 rounded-lg hover:bg-green-700 transition duration-300"
    onClick={async () => {
      const shareData = {
        title: file.originalname,
        text: "Check out this file!",
        url: file.path,
      };

      try {
        if (navigator.share) {
          await navigator.share(shareData);
        } else {
          await navigator.clipboard.writeText(file.path);
          toast.success("Link copied to clipboard!");
        }
      } catch (error) {
        console.error("Sharing failed", error);
        toast.error("Sharing failed");
      }
    }}
  >
    <i className="ri-share-line"></i>
  </button>
</div>



              {/* Uploader Details */}
              {file.uploadedBy && (
                <div className="flex items-center gap-3 mt-4">
                  <img
                    src={localStorage.getItem('avatar') || '/default-avatar.png'}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">{file.uploadedBy.name}</p>
                    <p className="text-xs text-gray-400">{file.uploadedBy.email}</p>
                  </div>

                 
                 
                </div>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Files;
