import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from "axios"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const RegisterPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const [signUp, setsignUp] = useState(null)
  const [submitted, setSubmitted] = useState(false);
  useEffect(()=>{
    console.log(" kya sahi me data mil rha hai ",signUp)
  },[signUp])
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
  
    try{
      if (formData.name && formData.email && formData.password && formData.phone) {
       const response = await axios.post("http://localhost:4000/api/auth/signUp",formData,{
        withCredentials: true })

        
       console.log('Server Response:ka yahi se  aa rha hai', response.data);
       setsignUp(response.data)
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        // setFormData({
        //   name: '',
        //   email: '',
        //   password: '',
        //   phone: '',
        // });

      const success = response.data.message
      toast(success)
      
      navigate("/")
      
      }
    }catch(error){
       console.error("signUp error",error.response.data)
       const errorMessage2 = error.response?.data?.message;
  toast.error(errorMessage2);
       const errorMessage = error.response?.data?.errors?.[0]?.msg ;
  toast.error(errorMessage);
       
      
      
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-12"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-lg"
      >
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-10">Create Your Account</h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-xl text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="p-4 rounded-xl border-2 border-purple-300 focus:outline-none focus:border-purple-600 text-lg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-xl text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="p-4 rounded-xl border-2 border-purple-300 focus:outline-none focus:border-purple-600 text-lg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-xl text-gray-700 mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="p-4 rounded-xl border-2 border-purple-300 focus:outline-none focus:border-purple-600 text-lg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="text-xl text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 9876543210"
              className="p-4 rounded-xl border-2 border-purple-300 focus:outline-none focus:border-purple-600 text-lg"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xl py-4 rounded-full transition-all"
          >
            Register
          </button>

          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-600 text-center text-xl font-semibold mt-6"
            >
              Registration Successful!
            </motion.p>
          )}
        </form>
      </motion.div>
    </motion.div>
  );
};

export default RegisterPage;
