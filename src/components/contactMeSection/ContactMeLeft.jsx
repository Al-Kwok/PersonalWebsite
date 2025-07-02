import React from 'react'
import ContactForm from './ContactForm'

const ContactMeLeft = () => {
  return (
    <div className='flex flex-col gap-8 w-full'>
        <div>
            <h2 className='text-orange text-3xl mb-4'>Get In Touch</h2>
            <p className='text-white'>
                Thank you for your interest in getting in touch!
                <br />
                I welcome any inquries or collaboration opportunities. You can reach me by filling out the form or via linkedin.
            </p>
        </div>
        <ContactForm />
    </div>
  )
}

export default ContactMeLeft