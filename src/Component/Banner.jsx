import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCards } from "swiper/modules";

const socialLinks = [
  {
    icon: <FaGithub />,
    href: "https://github.com/yourusername",
    colorClass: "text-gray-400 hover:text-white",
  },
  {
    icon: <FaLinkedin />,
    href: "https://linkedin.com/in/yourusername",
    colorClass: "text-blue-600 hover:text-blue-800",
  },
  {
    icon: <FaTwitter />,
    href: "https://twitter.com/yourusername",
    colorClass: "text-sky-500 hover:text-sky-700",
  },
];

const images = [
  "/WhatsApp Image 2025-02-21 at 09.56.05_3f7ae22e.jpg",
  "/WhatsApp Image 2025-02-21 at 09.56.04_39418611.jpg",
];

const PortfolioBanner = () => {
  return (
    <div className="font-rancho  " id="home">
      <motion.section
        className="bg-black min-h-screen mt-15 flex flex-col lg:flex-row px-4 sm:px-6 lg:px-20 py-12 gap-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Text Content */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 space-y-6 text-left text-white">
          <motion.h1
            className="text-4xl lg:max-w-2xl sm:text-5xl md:text-6xl font-extrabold"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }} >
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
              delaySpeed={1500} />
          </motion.h1>

          <motion.p
            className="max-w-xl text-base sm:text-lg md:text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}>
            I am from Bangladesh, passionate about building simple, fast, and clean web applications using the MERN stack.
          </motion.p>

          <motion.div
            className="font-semibold text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Find Me
          </motion.div>

          <motion.div
            className="flex space-x-6 text-2xl"
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
            className="inline-block mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded text-white font-medium transition w-full lg:w-[28%]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            Download Resume
          </motion.a>

        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <motion.div
            className="rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-1"
            initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            <div className="bg-black rounded-xl overflow-hidden w-[260px] sm:w-[280px] md:w-[320px] h-[360px] sm:h-[400px]">
              <Swiper
                effect="cards"
                grabCursor
                modules={[EffectCards]}
                className="mySwiper"
                loop={true}
                autoplay={{
                  delay: 200,
                  disableOnInteraction: false,
                }}
              >
                {images.map((src, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={src}
                      alt={`Slide ${idx + 1}`}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>


            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default PortfolioBanner;
