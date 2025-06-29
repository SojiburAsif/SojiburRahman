// import React from 'react';
// import { motion } from 'framer-motion';
// import {
//   FaReact,
//   FaNode,
//   FaCss3Alt,
//   FaHtml5,
//   FaJsSquare,
//   FaGitAlt,
//   FaGithub,
// } from 'react-icons/fa';
// import {
//   SiMongodb,
//   SiExpress,
//   SiTailwindcss,
//   SiFirebase,
//   SiReactrouter,
// } from 'react-icons/si';

// // Frontend Skills
// const frontendSkills = [
//   { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
//   { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
//   { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
//   { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
//   { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
//   { name: 'React Router', icon: <SiReactrouter className="text-pink-500" /> },
// ];

// // Backend Skills
// const backendSkills = [
//   { name: 'Node.js', icon: <FaNode className="text-green-600" /> },
//   { name: 'Express.js', icon: <SiExpress className="text-gray-200" /> },
//   { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
//   { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
// ];

// // Tools
// const tools = [
//   { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
//   { name: 'GitHub', icon: <FaGithub className="text-white" /> },
// ];

// // Skill Section Component
// const SkillsSection = ({ title, skills, border = false }) => (
//   <div className={`mb-12 w-full lg:w-1/3 ${border ? 'border-y border-white lg:border-y-0 lg:border-l lg:border-r border-white' : ''} px-4`}>
//     <h3 className="text-2xl font-semibold text-purple-400 mb-6 text-center lg:text-left">{title}</h3>
//     <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
//       {skills.map((skill, idx) => (
//         <motion.div
//           key={idx}
//           className="flex flex-col items-center justify-center p-5 sm:p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl shadow-lg hover:scale-105 transition-transform"
//           whileHover={{ scale: 1.1 }}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: idx * 0.1, duration: 0.6, ease: 'easeOut' }}
//         >
//           <div className="text-4xl sm:text-5xl mb-3">{skill.icon}</div>
//           <p className="text-sm sm:text-lg font-medium text-white">{skill.name}</p>
//         </motion.div>
//       ))}
//     </div>
//   </div>
// );

// // Main Skills Component
// const Skills = () => {
//   return (
//     <section id="Skills" className="py-12 font-rancho bg-black text-white px-4 sm:px-6 md:px-12 lg:px-20">
//       <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">My Skills</h2>
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
//         <SkillsSection title="Frontend" skills={frontendSkills} />
//         <SkillsSection title="Backend" skills={backendSkills} border={true} />
//         <SkillsSection title="Tools" skills={tools} />
//       </div>
//     </section>
//   );
// };

// export default Skills;
