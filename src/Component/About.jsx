import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const About = () => {
  const [activeTab, setActiveTab] = useState('Achievements');

  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-br font-rancho from-gray-900 via-black to-gray-900 text-white overflow-hidden" id="about">
      
      {/* Decorative Background Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-800 opacity-20 rounded-full blur-3xl mix-blend-overlay" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 opacity-20 rounded-full blur-2xl mix-blend-overlay" />

      {/* Subtle animated gradient */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 opacity-30 animate-gradient-x"
        style={{ filter: 'blur(60px)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
        {/* Section Title */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          About
        </motion.h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: About Me Card */}
          <motion.div
            className="bg-black bg-opacity-30 backdrop-blur-md p-6 sm:p-10 rounded-3xl shadow-2xl space-y-6"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="flex items-center text-2xl text-purple-600 font-bold">
              About Me <FaArrowRight className="ml-3 text-purple-600" />
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Sojibur Rahman — Aspiring MERN Stack Developer
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              I’m Sojibur Rahman, a final-year Diploma in Computer Science student,
              passionate about web development. As a MERN stack developer, I build
              modern, efficient, and responsive web applications with a focus on
              real-world usability and clean code.
            </p>
          </motion.div>

          {/* Right: Tabs Section */}
          <div className="space-y-10">
            {/* Tab Headers */}
            <div className="flex space-x-6 sm:space-x-12 border-b border-gray-700">
              {['Achievements', 'Education', 'Hobbies'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative text-lg sm:text-xl font-semibold pb-3 transition duration-300 ${
                    activeTab === tab
                      ? 'text-purple-500 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-1/2 after:bg-purple-500 after:rounded'
                      : 'text-gray-400 hover:text-purple-400'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="text-gray-300 text-base sm:text-lg leading-relaxed min-h-[180px]"
            >
              {activeTab === 'Achievements' && (
                <ul className="list-disc list-inside space-y-3">
                  <li>Completed multiple MERN stack projects demonstrating coding skills.</li>
                  <li>Successfully contributed to open-source projects.</li>
                  <li>Awarded best project in the final year of Diploma.</li>
                  <li>Proficient in MS Word, Excel, and PowerPoint.</li>
                  <li>Knowledgeable in Digital Marketing.</li>
                </ul>
              )}

              {activeTab === 'Education' && (
                <ul className="list-disc list-inside space-y-3">
                  <li>Diploma in Computer Science Engineering (Final Year)</li>
                  <li>Started SSC in 2022</li>
                  <li>SSC GPA: 5.00</li>
                  <li>Currently in Diploma Final Year</li>
                  <li>Relevant Coursework: Data Structures, Web Development</li>
                </ul>
              )}

              {activeTab === 'Hobbies' && (
                <ul className="list-disc list-inside space-y-3">
                  <li>Traveling: Exploring new places and cultures to spark creativity.</li>
                  <li>Photography: Capturing moments through a creative lens.</li>
                  <li>Reading Tech Blogs: Staying updated with the latest in web development.</li>
                  <li>Bike Riding: Enjoying adventurous rides and exploring new paths.</li>
                </ul>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
