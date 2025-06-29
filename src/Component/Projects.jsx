import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFirebase, SiJsonwebtokens } from 'react-icons/si';

const Projects = () => {
    return (
        <section id='Projects' className="scroll-mt-24 bg-black font-rancho text-white py-10">
            <h1 className="text-5xl text-center font-extrabold mb-14 text-white">Projects</h1>

            {/* Project 1 */}
            <div className="px-6 md:px-14 mb-20">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Swiper Section */}
                    <div className="w-full md:w-[60%] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-0.5 rounded-xl">
                        <Swiper
                            spaceBetween={30}
                            navigation={true}
                            loop={true}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            modules={[Navigation, Autoplay]}
                            className="rounded-lg overflow-hidden"
                        >
                            {[1, 2, 3, 4, 5].map(num => (
                                <SwiperSlide key={num}>
                                    <img src={`/Project-2/img${num}.png`} alt={`Slide ${num}`} className="w-full h-auto object-cover" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-3 text-purple-300">Micro Freelance Platform</h2>
                        <p className="text-gray-300 mb-5 text-lg leading-relaxed">
                            A platform that helps individuals find freelancers for small tasks. Users can post tasks, bid, and connect based on skills, budget, and deadlines.
                        </p>
                        <ul className="list-disc pl-6 text-base text-gray-400 space-y-2 mb-6 text-left">
                            <li>Task Posting & Bidding System</li>
                            <li>User Roles: Client and Freelancer</li>
                            <li>Skill Matching & Filtering</li>
                            <li>Live Chat</li>
                            <li>Stripe Payment Integration</li>
                        </ul>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-base text-gray-300">
                            {[{ Icon: FaReact, label: 'React', color: 'text-cyan-400' },
                            { Icon: SiTailwindcss, label: 'Tailwind CSS', color: 'text-sky-400' },
                            { Icon: FaNodeJs, label: 'Node.js', color: 'text-green-500' },
                            { Icon: SiMongodb, label: 'MongoDB', color: 'text-green-400' },
                            { Icon: SiFirebase, label: 'Firebase', color: 'text-yellow-400' },
                            { Icon: SiJsonwebtokens, label: 'JWT', color: 'text-red-400' }
                            ].map(({ Icon, label, color }) => (
                                <div key={label} className="flex items-center space-x-2">
                                    <Icon className={`${color} text-xl`} /> <span>{label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
                            <a href="https://your-live-site.com" target="_blank" rel="noopener noreferrer"
                                className="px-6 py-2 rounded text-white bg-purple-600 hover:bg-transparent hover:border hover:border-purple-500 hover:text-purple-400 transition duration-300">
                                Live Site
                            </a>
                            <a href="https://github.com/yourusername/freelance-client" target="_blank" rel="noopener noreferrer"
                                className="px-6 py-2 rounded text-white bg-gray-700 hover:bg-transparent hover:border hover:border-gray-500 hover:text-gray-300 transition duration-300">
                                GitHub Client
                            </a>
                            <a href="https://github.com/yourusername/freelance-server" target="_blank" rel="noopener noreferrer"
                                className="px-6 py-2 rounded text-white bg-gray-700 hover:bg-transparent hover:border hover:border-gray-500 hover:text-gray-300 transition duration-300">
                                Details
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project 2 */}
            <div className="px-6 md:px-14 mb-20">
                <div className="flex flex-col md:flex-row-reverse items-center gap-10">
                    {/* Swiper Section */}
                    <div className="w-full md:w-[60%] border border-purple-500 p-0.5 rounded-xl">
                        <Swiper
                            spaceBetween={30}
                            navigation={true}
                            loop={true}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            modules={[Navigation, Autoplay]}
                            className="rounded-lg overflow-hidden"
                        >
                            {[11, 12, 13, 14, 10, 18].map(num => (
                                <SwiperSlide key={num}>
                                    <img src={`/Project1/img${num}.png`} alt={`Slide ${num}`} className="w-full h-auto object-cover" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-3 text-purple-300">Service Sharing Web Application</h2>
                        <p className="text-gray-300 mb-5 text-lg leading-relaxed">
                            A platform where users can add, manage, and book services. It supports dashboards, bookings, real-time updates, and more.
                        </p>
                        <ul className="list-disc pl-6 text-base text-gray-400 space-y-2 mb-6 text-left">
                            <li>Service Management System</li>
                            <li>Role-based Dashboard</li>
                            <li>Status Tracking (Pending → Working → Completed)</li>
                            <li>Email/Google Authentication</li>
                        </ul>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-base text-gray-300">
                            {[{ Icon: FaReact, label: 'React', color: 'text-cyan-400' },
                            { Icon: SiTailwindcss, label: 'Tailwind CSS', color: 'text-sky-400' },
                            { Icon: FaNodeJs, label: 'Node.js', color: 'text-green-500' },
                            { Icon: SiMongodb, label: 'MongoDB', color: 'text-green-400' },
                            { Icon: SiFirebase, label: 'Firebase', color: 'text-yellow-400' },
                            { Icon: SiJsonwebtokens, label: 'JWT', color: 'text-red-400' }
                            ].map(({ Icon, label, color }) => (
                                <div key={label} className="flex items-center space-x-2">
                                    <Icon className={`${color} text-xl`} /> <span>{label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
                            <a href="https://your-live-site.com" target="_blank" rel="noopener noreferrer"
                                className="px-6 py-2 rounded text-white bg-purple-600 hover:bg-transparent hover:border hover:border-purple-500 hover:text-purple-400 transition duration-300">
                                Live Site
                            </a>
                            <a href="https://github.com/yourusername/service-sharing-client" target="_blank" rel="noopener noreferrer"
                                className="px-6 py-2 rounded text-white bg-gray-700 hover:bg-transparent hover:border hover:border-gray-500 hover:text-gray-300 transition duration-300">
                                GitHub Client
                            </a>
                            <a href="https://github.com/yourusername/service-sharing-server" target="_blank" rel="noopener noreferrer"
                                className="px-6 py-2 rounded text-white bg-gray-700 hover:bg-transparent hover:border hover:border-gray-500 hover:text-gray-300 transition duration-300">
                                Details
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
