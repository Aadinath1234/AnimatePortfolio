import React from "react";
import * as motion from "motion/react-client";

const box = {
  width: "auto",
  height: "auto",

  borderRadius: 5,
};

function Skills() {
  return (
    <div>
      <div className="p-12 max-sm:p-2 bg-orange-50">
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          style={box}
        >
          <p className="font-bold font-sans text-4xl border-2 border-black rounded-2xl skeleton w-40 p-4 max-sm:ml-8 bg-orange-50 text-black">
            Skills{" "}
          </p>
          <div className="flex w-20 flex-col max-sm:ml-8">
            <div className="divider divider-primary"></div>
          </div>
        </motion.div>

        {/* skills  */}

        {/* For TSX uncomment the commented types below */}
        <div className="flex gap-4 p-4  max-sm:flex-col max-lg:flex-col max-lg:justify-center max-lg:items-center  ">
          {/* card 1 */}

          <motion.div
            style={box}
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
          >
            <div className="card  w-80 shadow-sm border-2 border-black rounded-2xl skeleton  p-4 bg-black text-black">
              <figure>
                <div className="p-4  ">
                  <div className="w-60 h-35 flex justify-center items-center  ">
                    <img
                      src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-best-web-design-psd-html-cms-development-ecommerce-6.png"
                      alt="html image "
                    />
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
            <div className="card  w-80 shadow-sm border-2 border-black rounded-2xl skeleton p-4 bg-black text-black">
              <figure>
                <div className="p-4  ">
                  <div className="w-60 h-35 flex justify-center items-center ">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="tailwind image "
                    />
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
            <div className="card  w-80 shadow-sm border-2 border-black rounded-2xl skeleton  p-4 bg-black text-black">
              <figure>
                <div className="p-4  ">
                  <div className="w-60 h-35 flex justify-center items-center  ">
                    <img
                      src="https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=3840&fit=max"
                      alt="mern stack"
                    />
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
            <div className="card  w-80 shadow-sm border-2 border-black rounded-2xl skeleton  p-4 bg-black text-black">
              <figure>
                <div className="p-4  ">
                  <div className="w-60 h-35 flex justify-center items-center ">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWPE22E4GN3ctPStJrzFgHmtvu6S87f2M3mg&s"
                      alt="next.js"
                    />
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
            <div className="card  w-80 shadow-sm border-2 border-black rounded-2xl skeleton p-4 bg-black text-black">
              <figure>
                <div className="p-4  ">
                  <div className="w-60 h-35 flex justify-center items-center ">
                    <img
                      src="data:image/jpeg;base64,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U32XT396sfZ3YnGfHuyw8pUVlGhwqYIDIUQRTDfBbHERr4b4bus1wc4sMtoZGRkue8RSIvEYnwzlw6tYjjjHzcaj8iNivYYMTagueGvJEokKouk9thOy10nCokXWLKulFpjE8PRy2vuxJyW6DGjsgmjsaxzrQ6KXhsia3bcieAykr6U0veKzWMeefVTU3qUm2fRbk2BCjB56FrQ18BrQ1z/gvi7Ltol1ZIqnVwU0il8zu45ePiz1tS2njj3T8oWY2A6le9BAaGOimE1+1E6UOJ2GvrdsynI7MrKra1Wdyb7kRwzj3sbzrV0Pb7/GI3scMY5zHLPLvzz93Bi5apDTBowEGG0mCSCDFm0e+I4kNp5EjKdYJrO5UvMbteHd/wAynZNO0aurM3mftcvs/wCynHhEOMsnoCAgICAgAplMThmg0lzTMH88jkrxe0LRqWhsxItW20yabjKTTgZCZyWk3nnDWdScZiVRHdcbbJgV4udgMNTjfsj2lvFifTHTqNVgqFnYqzqWUnVsr75diPst9FG/ZHtLI98OsmLZ2Nt7FG/Jv2SKS/5XcE37HtLeLCqqCAgICAgICAgICAgICDr/AOpPi0aDQGw5lsUlpnW5zyQGyNQrditd+bVikQ6fbTqaVdCI7/V2+clKfB5PgUKIR0xAMUAglsJjnGExxH0p/wAvbtq2munFJ59/w7nXtV7aez10bfi7/hHKE02mQ4dAoAi0dsZrmxjIucwgteJSc26szF9WCm14jSpFozzW1NStdn0ovXMcfd3uc3nbE98PjOhscx8PoTBrDOiFjQbZiuvM7ln+02m02nlyx7nHba7WvNpjhMYx7mnS+UaO4sDKG1jASXDpYjnPmJAbZ+CBbZaqWvSeVfm57TE8owiHyuIQAo7DD67Iji9/SOcWT2W1NaA2szEq51lRGpu/hZWpvcyj8pQYcQRYdHIcDORjEsFRmGt2Zi29zlNb1rOYj5s76V713Ztw+H/aOQKZsvEKU+kiwK52bEQGy+aaVsTjxwz2vTzSb55Rb5w2KdynDZHiRGQdmNtRBtbc2NcSQXth7Mw60jrEAmoWSm14i0zEcWOns176VaWvmmI4Y4zHhM55eWZjvc+PTGvgw2Fh24bSxrg/qlhe+JWzZ+FN7q9qy5ZzaJiI8HTTRtTVtaJ4WnMxjjnERzzy4Rwx5tNVdAgICAgICAgvCils8DbXLvxUxOExOB8S4X2zMyd5SZJlRQgQEBAQEBAQEBAQEBAQEBAQEAFAJnWgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIP/Z"
                      alt="typescirpt"
                    />
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
            <div className="card  w-80 shadow-sm border-2 border-black rounded-2xl skeleton  p-4 bg-black text-black">
              <figure>
                <div className="p-4  ">
                  <div className="w-60 h-35 flex justify-center items-center">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="mysql"
                    />
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
          <div className="card  w-80 shadow-sm border-2 border-black rounded-2xl skeleton max-sm:ml-4 sm:ml-44  p-4 bg-black text-black">
            <figure>
              <div className="p-4  ">
                <div className="w-60 h-35 flex justify-center items-center">
                  <img
                    src="data:image/png;base64,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"
                    alt="php"
                  />
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
