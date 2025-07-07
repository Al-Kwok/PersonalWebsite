import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { FaJava } from "react-icons/fa6";
import SingleSkill from './SingleSkill'
import {motion} from 'framer-motion';
import {fadeIn} from '../../framerMotion/variants';
import { BiLogoCPlusPlus } from "react-icons/bi";
import { IoLogoPython } from "react-icons/io5";
import { div } from 'motion/react-client';


const skills = [{
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "TailWindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "ReactJS",
    icon: GrReactjs,
  },
  {
    skill: "Java",
    icon: FaJava,
  },
  {
    skill: "C++",
    icon: BiLogoCPlusPlus,
  },
  {
    skill: "Python",
    icon: IoLogoPython,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
        {skills.map((item, index)=>{
          return (
          <motion.div
            variants={fadeIn("up", `0.${index}`)}
            initial='hidden'
            whileInView='show'
            viewport={{once: false, amount: 0}}
          >
            <SingleSkill key={index} text={item.skill} imgSvg={<item.icon/>} />
          </motion.div>
            
          )
        })}
      </div>
    </div>
  )
}

export default AllSkills