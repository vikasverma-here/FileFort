import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="bg-gray-900 text-white shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 relative">

        <NavLink to="/" className="flex items-center gap-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Fort_Lauderdale_United_FC_logo_2024.png"
            alt="Logo"
            className="h-10 w-10"
          />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <NavLink to="/upload" className="hover:text-blue-400 transition">Upload</NavLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <NavLink to="/files" className="hover:text-blue-400 transition">Files</NavLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <NavLink to="/dashboard" className="hover:text-blue-400 transition">Dashboard</NavLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <NavLink to="/guide" className="hover:text-blue-400 transition">FileFort Guide</NavLink>
          </motion.div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <NavLink to="/login" className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md text-sm">Login</NavLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <NavLink to="/register" className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md text-sm">Register</NavLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <NavLink to="/profile" className="flex items-center">
              <img
                src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                alt="Profile"
                className="h-10 w-10 rounded-full object-cover border-2 border-green-500"
              />
            </NavLink>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="absolute top-16 right-6 bg-gray-800 rounded-md shadow-md p-4 flex flex-col gap-4 md:hidden">
            <NavLink to="/upload" onClick={toggleMenu} className="hover:text-blue-400">Upload</NavLink>
            <NavLink to="/files" onClick={toggleMenu} className="hover:text-blue-400">Files</NavLink>
            <NavLink to="/dashboard" onClick={toggleMenu} className="hover:text-blue-400">Dashboard</NavLink>
            <NavLink to="/guide" onClick={toggleMenu} className="hover:text-blue-400">FileFort Guide</NavLink>
            <NavLink to="/login" onClick={toggleMenu} className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md text-sm text-center">Login</NavLink>
            <NavLink to="/register" onClick={toggleMenu} className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md text-sm text-center">Register</NavLink>
            <NavLink to="/profile" onClick={toggleMenu} className="flex items-center justify-center">
              <img
                src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                alt="Profile"
                className="h-10 w-10 rounded-full object-cover border-2 border-green-500"
              />
            </NavLink>
          </div>
        )}

      </nav>
    </div>
  )
}

export default Navbar
