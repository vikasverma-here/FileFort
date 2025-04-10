import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/Context';
import { toast } from 'react-toastify';

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Vikas',
    email: 'vikas@example.com',
    phone: '1234567890',
  });
  const [image, setImage] = useState(null);
   const {user,setUser } = useContext(AppContext)
  
   useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email:user.email,
        phone: user.phone,
      });
    }
  }, [user]);

  console.log(user)
  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
  };

  const handleLogout = async() => {
    try{
const val = await axios.post("http://localhost:4000/api/auth/logout", "",{ withCredentials: true })
console.log(val)
toast("loged out successfll")
setUser({
  name:"",
  email:"",
  phone:""
})


    }catch(error){
      console.error("logout error",error)
      toast(error.response.data.message)
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        localStorage.setItem('profileImage', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Profile</h2>
        <button 
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="flex flex-col items-center mb-6">
        {image ? (
          <img 
            src={image} 
            alt="Profile" 
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
        ) : (
          <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gray-200 mb-4">
            <span className="text-gray-500 text-sm">No Image</span>
          </div>
        )}

        <label className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
          {image ? 'Change Image' : 'Upload Image'}
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
            className="hidden"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Name</label>
        <input 
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={!editMode}
          className={`w-full p-2 border ${editMode ? 'border-blue-400' : 'border-gray-300'} rounded`}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email</label>
        <input 
          type="email"
          name="email"
          value={formData.email}
          disabled
          className="w-full p-2 border border-gray-300 rounded bg-gray-100"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Phone</label>
        <input 
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          disabled={!editMode}
          className={`w-full p-2 border ${editMode ? 'border-blue-400' : 'border-gray-300'} rounded`}
        />
      </div>

      {!editMode ? (
        <button 
          onClick={handleEdit}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Edit
        </button>
      ) : (
        <button 
          onClick={handleSave}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full"
        >
          Save
        </button>
      )}
    </div>
  );
};

export default Profile;
