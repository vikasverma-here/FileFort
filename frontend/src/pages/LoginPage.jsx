import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  // const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    
      // setSubmitted(true);
      // setTimeout(() => setSubmitted(false), 3000);

  try{
    const response = await axios.post("http://localhost:4000/api/auth/login",{email,password},{withCredentials:true})

    console.log(response)
    toast(response.data.message)
    navigate("/")
  }catch(error){
    toast("invalid password")
    console.error("login error",error)
    
  }

      // setEmail('');
      // setPassword('');
    
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md"
      >
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">Login to FileFort</h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex flex-col">
            <label className="text-xl text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="p-4 rounded-xl border-2 border-blue-300 focus:outline-none focus:border-blue-600 text-lg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xl text-gray-700 mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="p-4 rounded-xl border-2 border-blue-300 focus:outline-none focus:border-blue-600 text-lg"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xl py-4 rounded-full transition-all"
          >
            Login
          </button>

          {/* {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-600 text-center text-xl font-semibold mt-6"
            >
              Login Successful!
            </motion.p>
          )} */}
     <div className="text-center text-gray-600 ">
  Don't have an account?{' '}
  <Link
    to="/register"
    className="text-purple-600 font-semibold hover:underline hover:text-purple-800 transition duration-300"
  >
   Register
  </Link>
</div>

        </form>
      </motion.div>
    </motion.div>
  );
};

export default Login;
