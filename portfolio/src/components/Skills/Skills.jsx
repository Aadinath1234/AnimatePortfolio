import React from "react";
import * as motion from "motion/react-client"


const box = {
  width: "auto",
  height: "auto",
  
  borderRadius: 5,
}

function Skills() {
  return (
    <div>
      <div className="p-12 max-sm:p-2 bg-orange-50">

      <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={box}
        >
        <p className="font-bold font-sans text-4xl border-2 border-black rounded-2xl skeleton w-40 p-4 max-sm:ml-8 bg-orange-50 text-black">Skills </p>
        <div className="flex w-20 flex-col max-sm:ml-8">
          <div className="divider divider-primary"></div>
        </div>
        </motion.div>


        {/* skills  */}
        
        {/* For TSX uncomment the commented types below */}
        <div className="flex gap-4 p-4  max-sm:flex-col max-lg:flex-col max-lg:justify-center max-lg:items-center ">
          {/* card 1 */}


          <motion.div
            style={box}
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
        >
          <div className="card  w-80 shadow-sm border-2 border-black rounded-2xl skeleton  p-4 bg-orange-50 text-black">
            <figure>
              <div className="p-4  ">
                <div
                  className="radial-progress text-3xl font-semibold font-sans"
                  style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" } /* as React.CSSProperties */ } 
                  aria-valuenow={70} role="progressbar"
                >
                  70%
                </div>
                <div className="p-2">
                  <p className="p-2 ml-10 font-serif font-semibold bg-blue-100 rounded-2xl w-20 ">
                    HTML
                  </p>
                </div>
              </div>
            </figure>
          </div>
          </motion.div>




          {/* card 2 */}
          <motion.div
            style={box}
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
        >
          <div className="card  w-80 shadow-sm border-2 border-black rounded-2xl skeleton p-4 bg-orange-50 text-black">
            <figure>
              <div className="p-4  ">
                <div
                 className="radial-progress text-3xl font-semibold font-sans"
                 style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" } /* as React.CSSProperties */ } 
                 aria-valuenow={70} role="progressbar"
                >
                  78%
                </div>
                <div className="p-2">
                  <p className="p-2 font-serif font-semibold bg-blue-100 rounded-2xl w-20 ml-10 ">
                    CSS 
                  </p>
                </div>
              </div>
            </figure>
          </div>

          </motion.div>

          {/* card 3 */}


          <motion.div
            style={box}
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
        >
          <div className="card  w-80 shadow-sm border-2 border-black rounded-2xl skeleton  p-4 bg-orange-50 text-black">
            <figure>
              <div className="p-4  ">
                <div
                  className="radial-progress text-3xl font-semibold font-sans"
                  style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" } /* as React.CSSProperties */ } 
                  aria-valuenow={70} role="progressbar"
                >
                  75%
                </div>
                <div className="p-2">
                  <p className="p-2 font-serif font-semibold bg-blue-100 rounded-2xl ml-10 w-24 ">
                  Javascript 
                  </p>
                </div>
              </div>
            </figure>
          </div>
          </motion.div>
          {/* card 4 */}

          
          
          {/* another level cards  */}
          </div>
          <div className="flex gap-4 p-4 max-sm:flex-col max-lg:flex-col max-lg:justify-center max-lg:items-center">
          {/* card 4 */}
          <motion.div
            style={box}
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
        >
          <div className="card  w-80 shadow-sm border-2 border-black rounded-2xl skeleton  p-4 bg-orange-50 text-black">
            <figure>
              <div className="p-4  ">
                <div
                  className="radial-progress text-3xl font-semibold font-sans"
                  style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" } /* as React.CSSProperties */ } 
                  aria-valuenow={70} role="progressbar"
                >
                  70%
                </div>
                <div className="p-2">
                  <p className="p-2 font-serif font-semibold bg-blue-100 ml-10 rounded-2xl w-20 ">
                    React 
                  </p>
                </div>
              </div>
            </figure>
          </div>
          </motion.div>

          {/* card 5 */}
          <motion.div
            style={box}
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
        >
          <div className="card  w-80 shadow-sm border-2 border-black rounded-2xl skeleton p-4 bg-orange-50 text-black">
            <figure>
              <div className="p-4  ">
                <div
                  className="radial-progress text-3xl font-semibold font-sans"
                  style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" } /* as React.CSSProperties */ } 
                  aria-valuenow={70} role="progressbar"
                >
                  78%
                </div>
                <div className="p-2">
                  <p className="p-2 font-serif font-semibold bg-blue-100 ml-10 rounded-2xl w-20 ">
                    Express  
                  </p>
                </div>
              </div>
            </figure>
          </div>
          </motion.div>

          {/* card 6 */}
          <motion.div
            style={box}
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
        >
          <div className="card  w-80 shadow-sm border-2 border-black rounded-2xl skeleton  p-4 bg-orange-50 text-black">
            <figure>
              <div className="p-4  ">
                <div
                 className="radial-progress text-3xl font-semibold font-sans"
                 style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" } /* as React.CSSProperties */ } 
                 aria-valuenow={70} role="progressbar"
                >
                  75%
                </div>
                <div className="p-2">
                  <p className="p-2 font-serif font-semibold bg-blue-100 ml-10 rounded-2xl w-24 ">
                  Nodejs 
                  </p>
                </div>
              </div>
            </figure>
          </div>
          </motion.div>

        </div>
        {/* card 7 */}
        <motion.div
            style={box}
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
        >
        <div className="card  w-80 shadow-sm border-2 border-black rounded-2xl skeleton max-sm:ml-4 sm:ml-44  p-4 bg-orange-50 text-black">
            <figure>
              <div className="p-4  ">
                <div
                 className="radial-progress text-3xl font-semibold font-sans"
                 style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" } /* as React.CSSProperties */ } 
                 aria-valuenow={70} role="progressbar"
                >
                  78%
                </div>
                <div className="p-2">
                  <p className="p-2 font-serif font-semibold ml-10 bg-blue-100 rounded-2xl w-24 ">
                    MongodB  
                  </p>
                </div>
              </div>
            </figure>
          </div>
          </motion.div>
      </div>
    </div>
  );
}

export default Skills;
