import React from "react";
import * as motion from "motion/react-client"


const box = {
  width: "auto",
  height: "auto",
 
  borderRadius: 5,
}



function Portfolio() {
  return (

    <div className="bg-orange-50">
      <div className="p-12">

     
               <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={box}
        >
      <div >
        <p className="font-bold font-sans text-4xl  border-2 border-black rounded-2xl skeleton w-48  p-4 bg-orange-50 text-black">
          Portfolio
        </p>
        <div className="flex w-20 flex-col">
          <div className="divider divider-primary"></div>
        </div>
  </div>
        </motion.div>
        </div>



      <div>
        {/* Timeline */}
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li className="timeline-middle">
          
            <div className="timeline-middle ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end border-2 border-black rounded-xl">
              <div className="card bg-orange-50 w-96 max-sm:w-80 sm:w-80 shadow-sm">
                <figure>
                  <div className="carousel rounded-box w-full ">
                    <div className="carousel-item w-full">
                      <img
                        src="/assets/codemantra1.jpg"
                        className="w-full"
                        alt="Tailwind CSS Carousel component"
                      />
                    </div>
                    <div className="carousel-item w-full">
                      <img
                        src="/assets/codemantra2.jpeg"
                        className="w-full"
                        alt="Tailwind CSS Carousel component"
                      />
                    </div>
                   
                  </div>
                  
                </figure>
                <div className="flex px-30 gap-4 justify-center items-center pt-2">
                  <div aria-label="status" className="status status-xs bg-black"></div>
                  <div aria-label="status" className="status status-sm bg-black"></div>
                  <div aria-label="status" className="status status-md  bg-black"></div>
                  <div aria-label="status" className="status status-lg  bg-black"></div>
                  <div aria-label="status" className="status status-xl  bg-black"></div>
                  </div>
                <div className="card-body">
                  
                  
                  <h2 className="card-title font-mono italic">
                    2024
                    <div className="badge badge-secondary skeleton text-black bg-blue-400">
                      Code Mantra 2024
                    </div>
                  </h2>
                  <motion.div
            style={box}
            /**
             * Setting the initial keyframe to "null" will use
             * the current value to allow for interruptable keyframes.
             */
            whileHover={{
                scale: [null, 1.1, 1.6],
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
                  <p className="font-serif font-normal">
                    Developed a full-stack MERN project in a team of 3, focusing
                    on user experience and robust backend functionality. Secured
                    2nd place for creating an efficient, scalable solution that
                    impressed the judging panel.
                  </p>
                  </motion.div>
                </div>
              </div>
            </div>
            
            <hr />
          </li>

          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end md:mb-10 border-2 border-black rounded-xl">
              <div className="card bg-orange-50 w-96 max-sm:w-80 sm:w-80 shadow-sm">
                <figure className="w-full ">
                  <div className="carousel rounded-box w-full  ">
                    <div className="carousel-item w-full">
                      <img
                        src="/assets/hack1.jpg"
                        className="w-full"
                        alt="Tailwind CSS Carousel component"
                      />
                    </div>

                    <div className="carousel-item w-full">
                      <img
                        src="/assets/hack3.jpg"
                        className="w-full "
                        alt="Tailwind CSS Carousel component"
                      />
                    </div>
                    <div className="carousel-item w-full">
                      <img
                        src="/assets/hack4.jpg"
                        className="w-full"
                        alt="Tailwind CSS Carousel component"
                      />
                    </div>
                  </div>
                </figure>
                <div className="flex px-30 gap-4 justify-center items-center pt-2">
                  <div aria-label="status" className="status status-xs bg-black"></div>
                  <div aria-label="status" className="status status-sm bg-black"></div>
                  <div aria-label="status" className="status status-md  bg-black"></div>
                  <div aria-label="status" className="status status-lg  bg-black"></div>
                  <div aria-label="status" className="status status-xl  bg-black"></div>
                  </div>
                <div className="card-body">
                  <h2 className="card-title font-mono italic">
                    2024
                    <div className="badge badge-secondary skeleton text-black bg-blue-400">
                      HackOverFlow | Mumbai
                    </div>
                  </h2>
                  <motion.div
            style={box}
            /**
             * Setting the initial keyframe to "null" will use
             * the current value to allow for interruptable keyframes.
             */
            whileHover={{
                scale: [null, 1.1, 1.6],
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
                  <p className="font-serif font-normal">
                    Created "Legal Bodh," a citizen support platform built using
                    the MERN stack to address legal challenges and improve user
                    accessibility to legal resources. Gained recognition for
                    impactful project delivery and technical execution.
                  </p>
                  </motion.div>
                </div>
              </div>
            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end border-2 border-black rounded-xl">
              <div className="card bg-orange-50 w-96 max-sm:w-80 sm:w-80 shadow-sm">
                <figure className="w-full ">
                  <div className="carousel rounded-box w-full  ">
                    <div className="carousel-item w-full">
                      <img
                        src="/assets/version2.jpg"
                        className="w-full"
                        alt="Tailwind CSS Carousel component"
                      />
                    </div>

                    <div className="carousel-item w-full">
                      <img
                        src="/assets/version.jpg"
                        className="w-full "
                        alt="Tailwind CSS Carousel component"
                      />
                    </div>
                    <div className="carousel-item w-full">
                      <img
                        src="/assets/version3.jpg"
                        className="w-full"
                        alt="Tailwind CSS Carousel component"
                      />
                    </div>
                  </div>
                </figure>
                <div className="flex px-30 gap-4 justify-center items-center pt-2">
                  <div aria-label="status" className="status status-xs bg-black"></div>
                  <div aria-label="status" className="status status-sm bg-black"></div>
                  <div aria-label="status" className="status status-md  bg-black"></div>
                  <div aria-label="status" className="status status-lg  bg-black"></div>
                  <div aria-label="status" className="status status-xl  bg-black"></div>
                  </div>
                <div className="card-body">
                  <h2 className="card-title font-mono italic">
                    2024
                    <div className="badge max-sm:h-10 sm:h-10 badge-secondary skeleton text-black bg-blue-400">
                      Version Beta 7.0 | MANIT,Bhopal
                    </div>
                  </h2>
                  <motion.div
            style={box}
            /**
             * Setting the initial keyframe to "null" will use
             * the current value to allow for interruptable keyframes.
             */
            whileHover={{
                scale: [null, 1.1, 1.6],
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
                  <p className="font-serif font-normal">
                    Collaborated with a 4-person team to design and develop
                    "Mind’s Cool," a solution for people facing issues with
                    mental health.
                  </p>
                  </motion.div>
                </div>
              </div>
            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end md:mb-10 border-2 border-black rounded-xl">
              <div className="card bg-orange-50 w-96 max-sm:w-80 sm:w-80 shadow-sm">
                <figure className="w-full ">
                  <div className="carousel rounded-box w-full  ">
                    <div className="carousel-item w-full">
                      <img
                        src="/assets/codeconquest.jpg"
                        className="w-full"
                        alt="Tailwind CSS Carousel component"
                      />
                    </div>

                    <div className="carousel-item w-full">
                      <img
                        src="/assets/codeconquest2.jpg"
                        className="w-full "
                        alt="Tailwind CSS Carousel component"
                      />
                    </div>
                  </div>
                </figure>
                <div className="flex px-30 gap-4 justify-center items-center pt-2">
                  <div aria-label="status" className="status status-xs bg-black"></div>
                  <div aria-label="status" className="status status-sm bg-black"></div>
                  <div aria-label="status" className="status status-md  bg-black"></div>
                  <div aria-label="status" className="status status-lg  bg-black"></div>
                  <div aria-label="status" className="status status-xl  bg-black"></div>
                  </div>
                <div className="card-body">
                  <h2 className="card-title font-mono italic">
                    2024
                    <div className="badge badge-secondary skeleton text-black bg-blue-400">
                      Code Conquest
                    </div>
                  </h2>
                  <motion.div
            style={box}
            /**
             * Setting the initial keyframe to "null" will use
             * the current value to allow for interruptable keyframes.
             */
            whileHover={{
                scale: [null, 1.1, 1.6],
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
                  <p className="font-serif font-normal">
                    Collaborated with a 5-person team to design and develop
                    "website" a solution for people facing issues with currency
                    conversion.
                  </p>
                  </motion.div>
                </div>
              </div>
            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div className="timeline-middle ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end ">
              <time className="font-mono italic">2024</time>
              <div className="text-lg font-black">
                Restaurant Web App | Frontend
              </div>
              Developed a frontend for a restaurant web app to allow users to
              browse the menu and place orders. View it here:
              <a
                href="https://food-maza.netlify.app"
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Restaurant Web App
              </a>
            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end md:mb-10 ">
              <time className="font-mono italic">2024</time>
              <div className="text-lg font-black">Mind’s Cool | Fullstack</div>
              Developed "Minds' Cool," a full-stack project focusing on mental
              health solutions. View it here:
              <a
                href="https://mentalwellness-5xb5.onrender.com/"
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Minds’ Cool
              </a>
            </div>
            <hr />
          </li>

          {/* New Project: Movie Clip Player */}
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2024</time>
              <div className="text-lg font-black">
                Movie Clip Player | Fullstack
              </div>
              Developed a movie clip player that allows users to browse and play
              clips from movies with a sleek user interface. View it here:
              <a
                href="https://mernprojects-client.onrender.com/"
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Movie Clip Player
              </a>
            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end md:mb-10">
              <time className="font-mono italic">2024</time>
              <div className="text-lg font-black">
                E-commerce Web App | Frontend
              </div>
              Developed a frontend for an e-commerce web app using modern web
              technologies. View it here:
              <a
                href="https://ecommerce-item.netlify.app"
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                E-commerce Web App
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
