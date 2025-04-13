import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero.svg";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigat = useNavigate()
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 text-gray-800">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-y-50 min-h-screen px-6 sm:px-10 md:px-20 py-20 overflow-hidden">
      <motion.div
        className="w-full md:w-1/2 flex flex-col gap-3 items-center md:items-start text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-6xl md:text-6xl font-extrabold leading-tight mb-6">
          Secure Your Files with FileFort
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-md leading-[2]">
        Upload your files securely and access them anytime, anywhere. With FileFort, you can store images, videos, and documents with ease. Built for speed and security, it's the perfect place to manage your files as a beginner MERN developer
        </p>
        <motion.button
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold"
          whileHover={{ scale: 1.1 }}
        >
          Start Now
        </motion.button>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 flex  justify-center items-center mb-10 md:mb-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
         
          src={heroImg}
          alt="File Security"
          className="w-full  sm:max-w-[100%]  lg:max-w-lg rounded-3xl shadow-2xl"
        />
      </motion.div>

    
    </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="text-center mb-16 px-4">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            What Makes Us Different
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Looking for an easy way to store your files? With our platform, you can quickly upload, organize, and access your files anytime. Simple, fast, and made for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-10 max-w-7xl mx-auto py-20">
  {[
    { title: "Secure Uploads", desc: "Upload your images safely with complete end-to-end encryption. We ensure your files are always protected." },
    { title: "Easy Sharing", desc: "Create shareable links with one click and send your images to anyone instantly without compromising on privacy." },
    { title: "Fast Downloads", desc: "No delays. Download your images anytime, from anywhere, at lightning speed, with absolutely no restrictions." },
    { title: "Mobile Friendly", desc: "Enjoy a smooth, responsive experience across all devices — whether it's your phone, tablet, or desktop." },
    { title: "24/7 Support", desc: "We are here whenever you need us. Reach out to our friendly support team anytime, any day." }
  ].map((item, index) => (
    <div
      key={index}
      className="bg-gray-100 p-12 rounded-3xl text-center border hover:shadow-xl transition-all min-h-[350px] flex flex-col justify-center"
    >
      <h3 className="text-3xl font-bold mb-6">{item.title}</h3>
      <p className="text-gray-600 text-lg">{item.desc}</p>
    </div>
  ))}
</div>

      </section>

      {/* How it Works */}
      <section className="py-20 bg-gradient-to-r from-purple-200 to-blue-200">
        <div className="text-center mb-16 px-4">
          <motion.h2
            className="text-4xl font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            How It Works
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-8">
          {["Sign Up", "Upload Files", "Share & Manage"].map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl w-64"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-14 h-14 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl mb-4">
                {index + 1}
              </div>
              <h4 className="text-xl font-semibold">{step}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
  <div className="text-center mb-16 px-4">
    <motion.h2
      className="text-4xl font-bold mb-6"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Users Love FileFort
    </motion.h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Join thousands of happy users who trust FileFort every day.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-8 max-w-7xl mx-auto">
    {[
      { img: "https://randomuser.me/api/portraits/women/44.jpg", review: "FileFort made my life so easy!", name: "Sophia Lee" },
      { img: "https://randomuser.me/api/portraits/men/32.jpg", review: "Super fast uploads and downloads!", name: "James Carter" },
      { img: "https://randomuser.me/api/portraits/women/68.jpg", review: "Secure and very simple to use.", name: "Olivia Smith" }
    ].map((user, index) => (
      <motion.div
        key={index}
        className="bg-purple-50 p-8 rounded-3xl shadow-md hover:shadow-2xl text-center flex flex-col items-center"
        whileHover={{ scale: 1.05, rotate: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <img
          src={user.img}
          alt={user.name}
          className="w-20 h-20 rounded-full object-cover mb-6 border-4 border-purple-200"
        />
        <p className="text-gray-700 mb-4">"{user.review}"</p>
        <h5 className="font-bold text-purple-900">- {user.name}</h5>
      </motion.div>
    ))}
  </div>
</section>


      {/* Call to Action */}
      <section className="py-20 bg-purple-600 text-white text-center px-4">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Secure Your Files?
        </motion.h2>
        <motion.button
          className="bg-white text-purple-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100"
          whileHover={{ scale: 1.1 }}
          onClick={()=>navigat("/login")}
        >
          Get Started
        </motion.button>
      </section>

    </div>
  );
};

export default LandingPage;
