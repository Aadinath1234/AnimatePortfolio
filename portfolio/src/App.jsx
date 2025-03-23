// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Navbar from './components/Navbar/Navbar.jsx'
// import Drawer  from './components/Drawer/Drawer.jsx'
// import Combine from './components/combine/combine.jsx'
// import {motion, useScroll} from "motion/react"





// function App() {
//   const { scrollYProgress } = useScroll() ;

//   return (
//     <div className='flex w-full overflow-x-hidden '>
      
//       <div className='fixed top-0 left-0 h-full w-[400px] bg-black z-50 overflow-y-auto '>
//       <Navbar />
//       </div>
      
      
//       <motion.div
//         id="scroll-indicator"
//         style={{
//            scaleX: scrollYProgress,
//            position: "fixed",
//            top:0,
//            left:0,
//            right:0,
//            height: "3px",
//            originX: 0,

//         }}
      
//       />
//       <div className=' ml-[400px]  ' >
// <Combine />
//       </div>
    
      
      
  
      
      
//     </div>
//   )
// }

// export default App




import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Combine from './components/combine/combine.jsx';
import Drawer from './components/Drawer/Drawer.jsx';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex w-full overflow-x-hidden">
      {/* Navbar (Visible on larger screens) */}
      <div className="hidden lg:block fixed top-0 left-0 h-full w-[400px] bg-black z-50 overflow-y-auto">
        <Navbar />
      </div>

      {/* Drawer (Visible only on mobile/tablet when hamburger is clicked) */}
      <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />

      {/* Combine (Takes full space on small screens, next to Navbar on larger ones) */}
      <div className={`ml-0 lg:ml-[400px] w-full`}>
        <Combine />
      </div>

      
    </div>
  );
}

export default App;
