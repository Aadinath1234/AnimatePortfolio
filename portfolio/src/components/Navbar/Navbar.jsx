import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaHome,
  FaUser,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { SiAmazondocumentdb } from "react-icons/si";
import { CiServer } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineContactPhone } from "react-icons/md";
import { TfiGallery } from "react-icons/tfi";
import { Link } from "react-scroll"; // Importing Link from react-scroll
import { motion } from "framer-motion"; // Importing motion from framer-motion

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

const Navbar = () => {
  return (
    <div className="card bg-black w-[400px] h-full shadow-sm">
      <div className="text-white p-2 gap-y-4">
        {/* Existing Navbar Links */}

        {/* Add your new profile section here */}
        <figure className="flex flex-col w-96 px-4 pt-4 mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            style={ball}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={box}
            >
              <img
                src="/assets/photo2.jpg"
                alt="logo"
                className="rounded-full h-1/2 skeleton p-12 bg-black"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={box}
            >
              <p className="card-title w-96 font-sans font-semibold text-blue-200 p-8 justify-center items-center">
                Aadesh Satpute
              </p>
            </motion.div>

            <div className="text-white items-center ">
              <ul className="flex gap-4 justify-center items-center">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  style={box}
                >
                  <a
                  href="https://github.com/Aadinath1234" // Add your GitHub URL here
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="rounded-full p-2 bg-blue-200 text-black text-3xl skeleton">
                  <FaGithub />
                  </li>
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  style={box}
                > <a
                href="https://x.com/satpute_aadesh" // Add your Twitter URL here
                target="_blank"
                rel="noopener noreferrer"
              >

                  <li className="rounded-full p-2 bg-blue-200 text-black text-3xl skeleton">
                  <FaXTwitter />
                  </li>
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  style={box}
                >
                  <a
                  href="https://www.instagram.com/aadeshsatpute375/" // Add your Instagram URL here
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="rounded-full p-2 bg-blue-200 text-black text-3xl skeleton">
                    <IoLogoInstagram />
                  </li>
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  style={box}
                >
                  <a
                  href="https://www.linkedin.com/in/aadesh-satpute-894220224" // Add your LinkedIn URL here
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="rounded-full p-2 bg-blue-200 text-black text-3xl skeleton">
                    <FaLinkedin />
                  </li>
                  </a> 
                </motion.div>
              </ul>
            </div>
          </motion.div>
        </figure>

        {/* Continue with other Navbar Links */}

        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          style={box}
        >
          <div className="font-sans font-semibold rounded-full p-2 mt-2 bg-blue-200 skeleton text-black text-2xl flex items-center">
            <p className="p-2">
              <FaHome />
            </p>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Home
            </Link>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          style={box}
        >
          <div className="font-sans font-semibold rounded-full p-2 mt-4 bg-blue-200 skeleton text-black text-2xl flex items-center">
            <p className="p-2">
              <FaUser />
            </p>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              About
            </Link>
          </div>
        </motion.div>

        {/* Other sections for portfolio, skills, etc. */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          style={box}
        >
          <div className="font-sans font-semibold rounded-full p-2 mt-4 bg-blue-200 skeleton text-black text-2xl flex items-center">
            <p className="p-2">
              <TfiGallery />
            </p>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Portfolio
            </Link>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          style={box}
        >
          <div className="font-sans font-semibold rounded-full p-2 mt-4 bg-blue-200 skeleton text-black text-2xl flex items-center">
            <p className="p-2">
              <SiAmazondocumentdb />
            </p>
            <Link
              to="testimonial"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Skills
            </Link>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          style={box}
        >
          <div className="font-sans font-semibold rounded-full p-2 mt-4 bg-blue-200 skeleton text-black text-2xl flex items-center">
            <p className="p-2">
              <CiServer />
            </p>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Services
            </Link>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          style={box}
        >
          <div className="font-sans font-semibold rounded-full p-2 mt-4 bg-blue-200 skeleton text-black text-2xl flex items-center">
            <p className="p-2">
              <MdOutlineContactPhone />
            </p>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          style={box}
        >
          <div className="font-sans font-semibold rounded-full p-2 mt-4 bg-blue-200 skeleton text-black text-2xl flex items-center">
            <p className="p-2">
              <IoDocumentText />
            </p>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Resume
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
