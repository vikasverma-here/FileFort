import React, { useState } from 'react';
import { motion } from 'framer-motion';

const steps = [
  { title: "Create an Account", description: "Click on the Register button and fill in your details to join FileFort." },
  { title: "Login", description: "Already registered? Login to access your secure files and dashboard." },
  { title: "Upload Files", description: "Upload images, videos, or documents easily through the Upload page." },
  { title: "Manage Your Files", description: "View, download, or delete your files anytime from the Files section." },
  // { title: "Dashboard Overview", description: "Monitor your storage space and file stats in the Dashboard." },
  { title: "Profile Settings", description: "Click your profile picture to update settings or logout." },
  { title: "Need Help?", description: "Facing issues? Revisit this guide or contact support for assistance." },
];

const Guide = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      setSubmitted(true);
      setFeedback('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto px-6 py-16"
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center mb-14 text-blue-700"
      >
        Welcome to FileFort
      </motion.h1>

      <div className="space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all"
          >
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">{index + 1}. {step.title}</h2>
            <p className="text-xl text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-20 bg-gray-100 rounded-2xl p-10 shadow-lg"
      >
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">Any Feedback?</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-6">
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Share your thoughts about FileFort..."
            className="w-full md:w-2/3 h-40 p-4 text-xl rounded-xl border-2 border-blue-300 focus:outline-none focus:border-blue-600 resize-none"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white text-xl py-3 px-8 rounded-full transition-all"
          >
            Submit Feedback
          </button>
          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-600 text-xl font-semibold mt-4"
            >
              Thank you for your feedback!
            </motion.p>
          )}
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Guide;
