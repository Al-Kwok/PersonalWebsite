import React from 'react'
import { PiHexagonThin } from "react-icons/pi";
import {motion} from 'framer-motion';
import {fadeIn} from '../../framerMotion/variants';


const HeroPic = () => {
  return (
    <motion.div 
      variants={fadeIn("left", 0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{once: false, amount: 0}}
      className='relative h-full flex items-center justify-center translate-x-[-100px]'
    >
      <img 
      src="profile-pic.jpg" 
      alt="Alex Kwok" 
      className="max-h-[270px] w-auto"
      />
      <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
        <PiHexagonThin className='md:h-[90%] sm:h-[120%] min-h-[500px] w-auto text-babyBlue blur-md animate-[spin_20s_linear_infinite]'/>
      </div>
    </motion.div>
  );
};

export default HeroPic