import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import * as motion from "motion/react-client";

const ball = {
  width: "auto",
  height: "auto",
  borderRadius: "50%",
};

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 4;
  const intervalTime = 3000; // Time interval (3 seconds)

  // Function to go to the next slide
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides ? 1 : prevSlide + 1
    );
  };

  // Function to go to the previous slide
  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 1 ? totalSlides : prevSlide - 1
    );
  };

  useEffect(() => {
    // Set an interval to change slides every 3 seconds
    const interval = setInterval(goToNextSlide, intervalTime);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full ">
      <div className="card bg-base-100 image-full w-full h-11/12 max-sm:h-full shadow-xl">
        <figure>
          <div className="carousel w-full opacity-50">
            {/* Slide 1 */}
            <div
              id="slide1"
              className={`carousel-item relative w-full ${
                currentSlide === 1 ? "block" : "hidden"
              }`}
            >
              <img
                src="/assets/photo1.jpg"
                className="w-full max-sm:h-full transition-all duration-1000 ease-in-out"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <button onClick={goToPrevSlide} className="btn btn-circle">
                  ❮
                </button>
                <button onClick={goToNextSlide} className="btn btn-circle">
                  ❯
                </button>
              </div>
            </div>
            {/* Slide 2 */}
            <div
              id="slide2"
              className={`carousel-item relative w-full ${
                currentSlide === 2 ? "block" : "hidden"
              }`}
            >
              <img
                src="/assets/photo3.jpg"
                className="w-full transition-all duration-1000 ease-in-out"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <button onClick={goToPrevSlide} className="btn btn-circle">
                  ❮
                </button>
                <button onClick={goToNextSlide} className="btn btn-circle">
                  ❯
                </button>
              </div>
            </div>
            {/* Slide 3 */}
            <div
              id="slide3"
              className={`carousel-item relative w-full ${
                currentSlide === 3 ? "block" : "hidden"
              }`}
            >
              <img
                src="/assets/photo6.jpg"
                className="w-full transition-all duration-1000 ease-in-out"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <button onClick={goToPrevSlide} className="btn btn-circle">
                  ❮
                </button>
                <button onClick={goToNextSlide} className="btn btn-circle">
                  ❯
                </button>
              </div>
            </div>
            {/* Slide 4 */}
            <div
              id="slide4"
              className={`carousel-item relative w-full ${
                currentSlide === 4 ? "block" : "hidden"
              }`}
            >
              <img
                src="/assets/photo5.jpg"
                className="w-full transition-all duration-1000 ease-in-out"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <button onClick={goToPrevSlide} className="btn btn-circle">
                  ❮
                </button>
                <button onClick={goToNextSlide} className="btn btn-circle">
                  ❯
                </button>
              </div>
            </div>
          </div>
        </figure>
        <div className="card-body py-96 max-lg:py-2  max-sm:py-2 gap-4">
          {/* names animate for small screen  */}
          <div className="lg:hidden">
            <div>
              <motion.div
                style={ball}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }} className="mt-40 w-40 "
              >
                <div
                  className="card-title font-serif font-bold text-blue-200 h-16 ml-10  rounded-2xl 
            flex text-6xl max-sm:text-4xl   "
                >
                  Aadesh Satpute
                </div>
              </motion.div>
            </div>
            <div>
              <motion.div
                style={ball}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }} className="mr-8 "
              >
                <div className="font-serif   font-semibold text-black h-16 gap-4 ml-10 px-4 max-sm:w-70  py-4 bg-blue-200 max-lg:opacity-30      skeleton rounded-2xl w-96  flex text-4xl">
                  I'm{" "}
                  <span className="typed">
                    <ReactTyped
                      strings={["Designer", "Developer", "Freelancer", "Coder"]}
                      typeSpeed={100} // Speed for typing
                      backSpeed={50} // Speed for deleting text
                      backDelay={1000} // Delay before deleting
                      loop // Repeat the typing animation
                    />
                  </span>
                  <span className="typed-cursor" aria-hidden="true">
                    |
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            style={ball}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <div
              className="card-title font-serif font-bold text-blue-200 h-16 ml-10 max-sm:ml-2 rounded-2xl 
            flex text-6xl max-lg:hidden "
            >
              Aadesh Satpute
            </div>
          </motion.div>

          <motion.div
            style={ball}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <div className="font-serif max-lg:hidden   font-semibold text-black h-16 gap-4 ml-10 px-4 max-sm:ml-2 py-4 bg-blue-200   max-sm:opacity-40   skeleton rounded-2xl w-96 max-sm:w-70 flex text-4xl">
              I'm{" "}
              <span className="typed">
                <ReactTyped
                  strings={["Designer", "Developer", "Freelancer", "Coder"]}
                  typeSpeed={100} // Speed for typing
                  backSpeed={50} // Speed for deleting text
                  backDelay={1000} // Delay before deleting
                  loop // Repeat the typing animation
                />
              </span>
              <span className="typed-cursor" aria-hidden="true">
                |
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
