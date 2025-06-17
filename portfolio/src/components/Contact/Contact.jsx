import React, { useState } from "react";
import { motion } from "framer-motion";  // Correct import for motion
import axios from "axios";  // Import axios

const box = {
  width: "auto",
  height: "auto",
  borderRadius: 5,
};

function Contact() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // To track the submission status

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await axios.post("https://animateportfolio.onrender.com/api/contact", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({ username: "", email: "", subject: "", message: "" });
      } else {
        setStatus(`Error: ${response.data.error}`);
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="bg-orange-50">
      <div className="p-12 bg-orange-50">
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          style={box}
        >
          <p className="font-bold font-sans text-4xl border-2 border-black rounded-2xl skeleton w-48 p-4 bg-orange-50 text-black">
            Contact
          </p>
        </motion.div>
        <div className="flex w-20 flex-col">
          <div className="divider divider-primary"></div>
        </div>
      </div>

      {/* Label and Input Fields */}
      <form onSubmit={handleSubmit} className="flex flex-row gap-4 max-sm:flex-col max-lg:flex-col max-lg:ml-4 px-40 max-sm:w-74 max-sm:p-4 py-4 bg-orange-50">
        {/* Username Input */}
        <label className="input validator">
          <svg
            className="h-[1em] opacity-50 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </g>
          </svg>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder="Enter Your Name"
            pattern="[A-Za-z][A-Za-z0-9\-]*"
            minLength="3"
            maxLength="30"
            title="Only letters, numbers, or dash"
          />
        </label>
        

        {/* Email Input */}
        <div className="join">
          <div>
            <label className="input validator join-item">
              <svg
                className="h-[1em] opacity-50 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                required
              />
            </label>
            <div className="validator-hint hidden w-full">
              Enter valid email address
            </div>
          </div>
        </div>

       
      </form>

      {/* Subject and Message */}
      <div className="flex flex-col max-sm:p-4 px-40 gap-4 max-lg:ml-4">
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="input w-4/5 max-sm:w-65 max-lg:w-78"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="textarea textarea-md w-4/5 p-20 h-4/5 max-sm:w-65 max-lg:w-78"
        ></textarea>

        <button type="submit" onClick={handleSubmit} className=" btn btn-neutral join-item w-40">Send Message</button>
      </div>

      {/* Status Message */}
      {status && <p>{status}</p>}
    </div>
  );
}

export default Contact;
