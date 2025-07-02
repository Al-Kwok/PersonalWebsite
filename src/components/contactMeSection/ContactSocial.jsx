import React from 'react'
import SingelContactSocial from './SingelContactSocial'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <SingelContactSocial link='#' Icon={FaLinkedinIn}/>
        <SingelContactSocial link='#' Icon={FiGithub}/>
    </div>

  )
}

export default ContactSocial