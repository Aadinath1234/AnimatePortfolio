import React, { useState } from "react";
import "../../App.css";
import Drawer from "../Drawer/Drawer.jsx"; // Assuming the Drawer component is in the same folder
import { FaArrowCircleRight } from "react-icons/fa";
import { motion } from "framer-motion"; // I assume you want to use framer-motion

const box = {
  width: "auto",
  height: "auto",
  borderRadius: 5,
};

function About() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Path to the resume file in the public folder
    link.download = "resume.pdf"; // Name of the downloaded file
    link.click();
  };

  const handleViewResume = () => {
    // Open the resume PDF in a new tab
    const resumeUrl = "/resume.pdf";
    window.open(resumeUrl, "_blank"); // Opens the PDF in a new browser tab
  };

  return (
    <div>
      {/* Sticky Hamburger Button */}
      <button onClick={toggleDrawer} className="hamburger-button">
        ☰
      </button>

      {/* Drawer component for small screens */}
      <Drawer
        isOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        className="overflow-y-auto "
      />

      <div className="p-16 bg-orange-50">
        <motion.div
          style={box}
          whileHover={{
            scale: [null, 1.1, 1.2],
            transition: {
              duration: 0.5,
              times: [0, 0.6, 1],
              ease: ["easeInOut", "easeOut"],
            },
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        >
          <p className="font-bold font-sans text-4xl border-2 border-black rounded-2xl skeleton w-40 p-4 bg-orange-50 text-black">
            About
          </p>
        </motion.div>

        {/* Content */}
        <div className="flex w-20 flex-col">
          <div className="divider divider-primary"></div>
        </div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          style={box}
        >
          <p className="text-wrap border-2 border-black rounded-2xl p-4">
            I’m a dedicated full-stack web developer who has contributed to impactful projects such 
            as “Mind’s Cool” (Version Beta 7.0, MANIT Bhopal) and “Legal Bodh” (HackOverFlow, Mumbai).
            These experiences have provided me with hands-on expertise in full-stack development, 
            working with technologies like MongoDB, Express.js, React.js, Node.js, Nextjs,TS, Tailwindcss,Shadcn and DaisyUI.
           With a background in Information Technology and strong skills in JavaScript, 
            HTML, CSS, PHP, and MySQL, I bring a proactive mindset and 
            a deep commitment to continuous learning. 


          </p>
        </motion.div>

        <div className="flex max-sm:flex-col sm:flex-col sm:justify-center sm:items-center p-2 gap-10">
          <div className="w-2/3 h-4/5 max-sm:w-full   py-10 mt-8 border-2 border-black  rounded-2xl p-2 skeleton bg-orange-50">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={box}
              
            >
              <img
                src="/assets/photo2.jpg"
                alt="about"
                className="w-full h-full  rounded-4xl"
              />
            </motion.div>
          </div>

          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={box}
          >
            <div className="w-full p-8 ml-10 max-sm:ml-1 max-sm:w-full sm:ml-2 max-sm:p-2 border-2 border-black rounded-2xl bg-orange-50 skeleton ">
              <div className="font-sans font-semibold text-2xl">
                <div>
                  <h1>Web Designer and Developer</h1>
                </div>
              </div>
              <p className="p-4 font-serif ">
                expertise in backend/frontend, JavaScript, Node.js, and MongoDB.
              </p>
              <div>
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Detail</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      <tr className="hover:bg-amber-50">
                        <th>
                          <FaArrowCircleRight />
                        </th>
                        <td>DOB</td>
                        <td>12/09/2000</td>
                      </tr>
                      {/* row 2 */}
                      <tr className="hover:bg-base-300">
                        <th>
                          <FaArrowCircleRight />
                        </th>
                        <td>Phone </td>
                        <td>7225012026</td>
                      </tr>
                      {/* row 3 */}
                      <tr className="hover:bg-orange-50">
                        <th>
                          <FaArrowCircleRight />
                        </th>
                        <td>City</td>
                        <td>Betul,MadhyaPradesh</td>
                      </tr>
                      <tr className="hover:bg-amber-50">
                        <th>
                          <FaArrowCircleRight />
                        </th>
                        <td>Degree</td>
                        <td>B.Tech | IT</td>
                      </tr>
                      <tr className="hover:bg-base-300">
                        <th>
                          <FaArrowCircleRight />
                        </th>
                        <td>Email</td>
                        <td>aadeshsatpute375@gmail.com</td>
                      </tr>
                      <tr className="hover:bg-orange-50">
                        <th>
                          <FaArrowCircleRight />
                        </th>
                        <td>Freelance </td>
                        <td>Available </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Buttons for Download and View */}
        <div className="px-10 max-sm:p-4 ">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={box}
          >
            <button
              className="btn btn-primary w-40 max-sm:ml-4  rounded-xl"
              onClick={handleDownload}
            >
              Download Resume
            </button>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={box}
          >
            <button
              className="btn btn-secondary w-40 max-sm:mt-4 rounded-xl ml-4"
              onClick={handleViewResume}
            >
              View Resume
            </button>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default About;
