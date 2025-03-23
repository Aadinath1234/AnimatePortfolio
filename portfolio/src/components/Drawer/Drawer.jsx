
import React from "react";
import { Link } from "react-scroll";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaHome,
  FaUser,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { TfiGallery } from "react-icons/tfi";
import { SiAmazondocumentdb } from "react-icons/si";
import { CiServer } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineContactPhone } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { motion } from "framer-motion"; // For animations

const box = {
  width: "auto",
  height: "auto",
  borderRadius: 5,
};

const ball = {
  width: "auto",
  height: "auto",
  borderRadius: "50%",
};

const Drawer = ({ isOpen, toggleDrawer }) => {
  return (
    <div>
      {/* Drawer */}
      <motion.div
        className={`fixed top-0 left-0 w-64 bg-black h-full z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Container for scrolling */}
        <div className="text-white p-8 gap-y-4 max-md:gap-10 overflow-y-auto h-full">
          {" "}
          {/* Added h-full here */}
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            style={ball}
            className="flex flex-col items-center"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={box}
            >
              <img
                src="/assets/photo2.jpg"
                alt="logo"
                className="rounded-full h-32 w-32 mb-4"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={box}
            >
              <p className="text-blue-200 text-center font-sans font-semibold">
                Aadesh Satpute
              </p>
            </motion.div>

            {/* Social Media Icons with links */}
            <div className="flex gap-4 justify-center mb-8 max-sm:gap-2 max-sm:p-4 max-lg:gap-2 max-lg:p-4 ">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <a
                  href="https://github.com/Aadinath1234" // Add your GitHub URL here
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-2 rounded-xl bg-blue-200 text-black text-3xl max-sm:text-xl max-lg:text-xl">
                    <FaGithub />
                  </div>
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <a
                  href="https://x.com/satpute_aadesh" // Add your Twitter URL here
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="rounded-xl p-2 bg-blue-200 text-black text-3xl max-sm:text-xl max-lg:text-xl">
                  <FaXTwitter />
                  </div>
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <a
                  href="https://www.instagram.com/aadeshsatpute375/" // Add your Instagram URL here
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="rounded-xl p-2 bg-blue-200 text-black text-3xl max-sm:text-xl max-lg:text-xl">
                    <IoLogoInstagram />
                  </div>
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <a
                  href="https://www.linkedin.com/in/aadesh-satpute-894220224" // Add your LinkedIn URL here
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="rounded-xl p-2 bg-blue-200 text-black text-3xl max-sm:text-xl max-lg:text-xl">
                    <FaLinkedin />
                  </div>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Navbar Links */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={box}
            >
              <div className="font-sans font-semibold rounded-full p-2 bg-blue-200 text-black text-2xl flex items-center">
                <p className="p-2">
                  <FaHome />
                </p>
                <Link to="hero" smooth={true} duration={500} onClick={toggleDrawer}>
                  Home
                </Link>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={box}
            >
              <div className="font-sans font-semibold rounded-full p-2 mt-4 bg-blue-200 text-black text-2xl flex items-center">
                <p className="p-2">
                  <FaUser />
                </p>
                <Link to="about" smooth={true} duration={500} onClick={toggleDrawer}>
                  About
                </Link>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={box}
            >
              <div className="font-sans font-semibold rounded-full p-2 mt-4 bg-blue-200 text-black text-2xl flex items-center">
                <p className="p-2">
                  <TfiGallery />
                </p>
                <Link to="portfolio" smooth={true} duration={500} onClick={toggleDrawer}>
                  Portfolio
                </Link>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={box}
            >
              <div className="font-sans font-semibold rounded-full p-2 mt-4 bg-blue-200 text-black text-2xl flex items-center">
                <p className="p-2">
                  <SiAmazondocumentdb />
                </p>
                <Link to="testimonial" smooth={true} duration={500} onClick={toggleDrawer}>
                  Skills
                </Link>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={box}
            >
              <div className="font-sans font-semibold rounded-full p-2 mt-4 bg-blue-200 text-black text-2xl flex items-center">
                <p className="p-2">
                  <CiServer />
                </p>
                <Link to="experience" smooth={true} duration={500} onClick={toggleDrawer}>
                  Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={box}
            >
              <div className="font-sans font-semibold rounded-full p-2 mt-4 bg-blue-200 text-black text-2xl flex items-center">
                <p className="p-2">
                  <MdOutlineContactPhone />
                </p>
                <Link to="contact" smooth={true} duration={500} onClick={toggleDrawer}>
                  Contact
                </Link>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={box}
            >
              <div className="font-sans font-semibold rounded-full p-2 mt-4 bg-blue-200 text-black text-2xl flex items-center">
                <p className="p-2">
                  <IoDocumentText />
                </p>
                <Link to="about" smooth={true} duration={500} onClick={toggleDrawer}>
                  Resume
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Drawer;

