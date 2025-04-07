import { useState } from "react";
import axios from "axios";

function UploadForm() {
  const [file, setFile] = useState(null);
  const [uploadedUrls, setUploadedUrls] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    for (let i = 0; i < file.length; i++) {
      formData.append("files", file[i]);
    }

    try {
      const res = await axios.post("http://localhost:4000/api/uploads/media", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      setUploadedUrls(res.data.files); // yahan backend se URLs aayenge
    } catch (error) {
      console.error(error);
      alert("Upload failed!");
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      <div>
        {uploadedUrls.map((file, index) => (
          <div key={index}>
            <img src={file.url} alt="Uploaded" width="200" />
            <video
  src={file.url}
  autoPlay
  muted
  controls
  loop
  style={{ width: "500px", height: "auto" }}
/>
            <p>{file.filename}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UploadForm;
