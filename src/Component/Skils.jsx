import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import {
  FaReact,
  FaNode,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiReactrouter,
} from 'react-icons/si';
import { FiLayers } from 'react-icons/fi';


const frontendSkills = [
  { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
  { name: 'React Router', icon: <SiReactrouter className="text-pink-500" /> },
];


const backendSkills = [
  { name: 'Node.js', icon: <FaNode className="text-green-600" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-200" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
];


const tools = [
  { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
  { name: 'GitHub', icon: <FaGithub className="text-white" /> },
];


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Skill Section Component
const SkillsSection = ({ title, skills }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,  // animation triggers only once
    threshold: 0.1,     // when 10% visible
  });

  return (
    <div className="mb-12" ref={ref}>
      <h3 className="text-2xl font-semibold text-purple-400 mb-6 text-center lg:text-left">{title}</h3>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center justify-center p-5 sm:p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl shadow-lg hover:scale-105 transition-transform cursor-default"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-4xl sm:text-5xl mb-3">{skill.icon}</div>
            <p className="text-sm sm:text-lg font-medium text-white">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// Main Skills Component
const Skills = () => {
  return (
    <section id="Skills" className="py-12 font-rancho bg-black text-white px-4 sm:px-6 md:px-12 lg:px-20">
     <h2 className="flex items-center justify-center text-3xl sm:text-4xl font-bold text-center mb-14 gap-3">
  <FiLayers className="text-blue-500 animate-pulse" size={38} />
  My Skills
</h2>
      <div className="max-w-7xl mx-auto space-y-16">
        <SkillsSection title="Frontend" skills={frontendSkills} />
        <SkillsSection title="Backend" skills={backendSkills} />
        <SkillsSection title="Tools" skills={tools} />
      </div>
    </section>
  );
};

export default Skills;
