import React from 'react'
import SingelContactSocial from './SingelContactSocial'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <SingelContactSocial link='https://www.linkedin.com/in/alextckwok' Icon={FaLinkedinIn}/>
        <SingelContactSocial link='https://github.com/Al-Kwok' Icon={FiGithub}/>
    </div>

  )
}

export default ContactSocial