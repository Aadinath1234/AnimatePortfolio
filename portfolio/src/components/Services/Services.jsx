import React from "react";
import * as motion from "motion/react-client"



const box = {
  width: "auto",
  height: "auto",
  
  borderRadius: 5,
}

function Services() {
  return (
    <div>
      <div className="p-12 bg-orange-50 skeleton">
      <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={box}
        >
        <p className="font-bold font-sans text-4xl  border-2 border-black rounded-2xl skeleton w-48 p-4 bg-orange-50 text-black">
          Services{" "}
        </p>
        </motion.div>
        <div className="flex w-20 flex-col">
          <div className="divider divider-primary"></div>
        </div>
        <div className="w-full">
          <ul className="flex flex-row max-sm:flex-col max-lg:flex-col  justify-center items-center gap-4 w-full">
            <li>
            <motion.div
            animate={{
                scale: [1, 1, 1, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
            }}
            style={box}
        >
              <div className="card bg-orange-50 w-96 max-sm:w-80  shadow-sm border-2 border-black rounded-2xl skeleton">
                <figure className="w-full">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9OG3XO5i64O-oZ0h3vpdPuieEE2MzN5hqlg&s"   className="rounded-xl p-14"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Web Designing </h2>
                  <p>
                    Web design focuses on creating visually appealing and
                    user-friendly websites. It involves responsive design to
                    ensure accessibility on various devices, with attention to
                    layout, typography, and color schemes. User experience (UX)
                    is key, ensuring easy navigation and intuitive interactions.
                    Tools like wireframes, prototypes, and mockups help bring
                    designs to life while ensuring mobile-first design and
                    cross-browser compatibility.
                  </p>
                </div>
              </div>
              </motion.div>
            </li>
            <li>
            <motion.div
            animate={{
                scale: [1, 1, 1, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
            }}
            style={box}
        >
              <div className="card bg-orange-50 w-96 max-sm:w-80  shadow-sm border-2 border-black rounded-2xl skeleton">
                <figure className="w-full ">
                  <img
                    src="https://img.freepik.com/free-vector/teamwork-project-isometric-composition-with-four-female-characters-developing-user-interface-website-vector-illustration_1284-74778.jpg?semt=ais_hybrid"
                    alt="Shoes"
                    className="rounded-xl "
                  />
                </figure>
                <div className="card-body items-center text-center ">
                  <h2 className="card-title">Software Development </h2>
                  <p>
                    Software development involves building applications using a
                    range of technologies, including full-stack frameworks like
                    MERN. It emphasizes backend architecture, database
                    management, and API integration. Agile development methods,
                    version control, and continuous integration are commonly
                    used to ensure efficient collaboration. Testing, debugging,
                    and security practices ensure that the software is
                    functional, scalable, and secure.
                  </p>
                </div>
              </div>
              </motion.div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
