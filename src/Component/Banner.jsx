import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCards, Autoplay } from "swiper/modules";

const socialLinks = [
  {
    icon: <FaGithub />,
    href: "https://github.com/SojiburAsif",
    colorClass: "text-gray-400 hover:text-white",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/sojibur-asif/",
    colorClass: "text-blue-600 hover:text-blue-800",
  },
];

const images = [
  "/WhatsApp Image 2025-02-21 at 09.56.05_3f7ae22e.jpg",
  "/WhatsApp Image 2025-02-21 at 09.56.04_39418611.jpg",
];

const PortfolioBanner = () => {
  return (
    <div
      className="relative font-rancho bg-gradient-to-b from-gray-900 to-black"
      id="home"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-56 md:h-72 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none z-0" />
 <div className="absolute top-0 left-0 w-56 h-56 sm:w-72 sm:h-72 bg-purple-800 opacity-20 rounded-full blur-3xl" />

      <motion.section
        className="relative z-10 min-h-screen mt-15 flex flex-col lg:flex-row px-4 sm:px-6 lg:px-20 py-12 gap-10 bg-opacity-70"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Text Content */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 space-y-4 text-left text-white">
          <motion.h1
            className="text-3xl md:text-4xl min-h-27 lg:max-w-2xl font-extrabold"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            I’m <span className="text-purple-500">Sojibur Rahman Asif</span>{" "}
            <Typewriter
              words={[
                "MERN Stack Developer",
                "Web Application Engineer",
                "Full-Stack JavaScript Developer",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={10}
              delaySpeed={1500}
            />
          </motion.h1>

          <motion.p
            className="max-w-xl text-sm md:text-base text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I am from Bangladesh, passionate about building simple, fast, and clean
            web applications using the MERN stack.
          </motion.p>

          <motion.div
            className="font-semibold text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Find Me
          </motion.div>

          <motion.div
            className="flex space-x-6 text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.colorClass} transition-colors`}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>

          <motion.a
            href="/your-resume.pdf"
            download
            className="inline-flex items-center space-x-2 mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded text-white font-medium transition w-full md:w-[40%] lg:w-[39%] text-base md:text-lg lg:text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <FaDownload className="w-4 h-4 text-purple-300" />
            <span>Download Resume</span>
          </motion.a>

          <motion.a
            href="#Projects"
            className="inline-block mt-2 px-6 py-3 border border-white rounded text-white font-medium transition w-full md:w-[40%] lg:w-[39%] text-base md:text-lg lg:text-sm bg-transparent hover:bg-white hover:text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            View Projects
          </motion.a>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <motion.div
            initial={{ scale: 0.9, rotate: -5, opacity: 0 }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [-2, 2, -2],
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="w-[80vw] max-w-[380px] border-3 border-purple-500 aspect-square rounded-full overflow-hidden"
          >
            <Swiper
              effect="cards"
              grabCursor
              modules={[EffectCards, Autoplay]}
              className="w-full h-full"
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
            >
              {images.map((src, idx) => (
                <SwiperSlide key={idx} className="w-full h-full">
                  <img
                    src={src}
                    alt={`Slide ${idx + 1}`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default PortfolioBanner;
